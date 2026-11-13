/* Shared by the contributor form, reader, and GitHub review workflow. */
const SpecChanges = (() => {
  const repository = 'zehralokhandwala-ck12/ck12-design-guide';
  const palettes = ['pie-colors', 'multi-line-graph', 'bar-colors'];
  const hex = /^#[0-9a-f]{6}$/i;
  const id = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  function escape(text) {
    return String(text).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  }
  function slug(text) {
    return text.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  function requireValue(ok, message) { if (!ok) throw new Error(message); }
  function line(value, label, max = 300) {
    requireValue(typeof value === 'string' && value.trim().length && value.trim().length <= max, label + ' is required (up to ' + max + ' characters).');
    return value.trim();
  }
  function entries(data) { return data.subjects.flatMap(s => s.categories.flatMap(c => c.elements)); }
  function category(data, subject, categoryId) {
    return data.subjects.find(s => s.id === subject)?.categories.find(c => c.id === categoryId);
  }
  function colors(entry) { return entry.specs.map(row => row.value.toUpperCase()); }
  function colorLabel(target, index) {
    const n = index + 1;
    const suffix = (n % 100 >= 11 && n % 100 <= 13) ? 'th' : ({1:'st',2:'nd',3:'rd'}[n % 10] || 'th');
    const position = n + suffix;
    if (target === 'pie-colors') return position;
    const role = index === 0 ? 'Primary' : index === 1 ? 'Secondary' : position;
    return role + (target === 'multi-line-graph' ? ' line' : ' bar color');
  }
  function validate(input, data, figures) {
    requireValue(input && input.version === 1, 'Unsupported proposal format.');
    const c = category(data, input.subject, input.category);
    requireValue(c, 'Select an existing subject and category.');
    const record = {version:1, kind:input.kind, subject:input.subject, category:input.category,
      scope:line(input.scope, 'Applicable grades or cases', 180), source:line(input.source, 'Source or reason', 1000)};
    if (input.figureId) {
      const f = figures.find(f => f.id === input.figureId);
      requireValue(f, 'The reference figure is unavailable. Choose it again.');
      record.figureId = f.id;
      record.image = {src:'source-images/' + f.src, caption:line(input.caption || f.title, 'Figure caption')};
    }
    if (input.kind === 'spec') {
      record.title = line(input.title, 'Spec name', 100);
      record.id = slug(record.title);
      requireValue(id.test(record.id), 'Use a spec name containing a letter or number.');
      requireValue(!entries(data).some(e => e.id === record.id || slug(e.label) === record.id), 'This spec name already exists. Choose a distinct name.');
      requireValue(Array.isArray(input.properties) && input.properties.length > 0 && input.properties.length <= 40, 'Add between 1 and 40 properties.');
      record.properties = input.properties.map(p => ({label:line(p.label, 'Property name', 100), value:line(p.value, 'Property value', 500)}));
      requireValue(new Set(record.properties.map(p => p.label.toLowerCase())).size === record.properties.length, 'Give each property a distinct name.');
      requireValue(Array.isArray(input.related) && input.related.length <= 20, 'Select existing shared rules.');
      const all = entries(data);
      record.related = [...new Set(input.related)].map(key => {
        const entry = all.find(e => e.id === key);
        requireValue(entry, 'A shared rule is unavailable.');
        return key;
      });
    } else {
      requireValue(input.kind === 'color' && palettes.includes(input.target), 'Choose a supported graph palette.');
      const entry = c.elements.find(e => e.id === input.target);
      requireValue(entry, 'This palette is not in the selected category.');
      const current = colors(entry);
      requireValue(JSON.stringify(input.before) === JSON.stringify(current), 'The palette has changed. Reopen the palette and review your change against the current order.');
      requireValue(input.operation === 'add' || input.operation === 'edit', 'Choose add or edit.');
      const limit = current.length - (input.operation === 'edit' ? 1 : 0);
      requireValue(Number.isInteger(input.position) && input.position >= 0 && input.position <= limit, 'Choose a valid palette position.');
      requireValue(typeof input.color === 'string' && hex.test(input.color), 'Enter a six-digit hex color, such as #4D80F5.');
      const color = input.color.toUpperCase();
      requireValue(!current.includes(color), 'This color is already in the palette.');
      Object.assign(record, {target:input.target, operation:input.operation, position:input.position, color, before:current,
        role:line(input.role, 'Color role or intended use', 180)});
    }
    return record;
  }
  function afterColors(record) {
    const result = record.before.slice();
    result.splice(record.position, record.operation === 'edit' ? 1 : 0, record.color);
    return result;
  }
  function apply(data, record) {
    if (record.kind === 'card-edit') {
      const entry=category(data,record.subject,record.category)?.elements.find(e=>e.id===record.id);
      requireValue(entry,'Card unavailable.');
      for(const [field,changes] of Object.entries(record.rows)){
        requireValue(['specs','grade'].includes(field),'Invalid property group.');
        const original=field==='grade'?entry.gradeTable.rows:(entry.specs || []);
        const updated=changes.map(row=>{
          const previous=original[row.index] || {};
          if(!row.edit)return previous;
          const label=escape(line(row.label,'Property name',300));
          if(field==='grade')return {label,values:row.values.map(v=>escape(line(v,'Grade value',1500))),highlight:true};
          const value=escape(line(row.value,'Property value',2000));
          return {label,value,...(previous.id ? {id:previous.id} : {}),...(hex.test(value)?{type:'color'}:{})};
        });
        if(field==='grade')entry.gradeTable.rows=updated;else entry.specs=updated;
      }
      entry.hiddenImages=[...new Set([...(entry.hiddenImages||[]),...record.removeImages])];
      for(const img of record.addImages){
        requireValue(/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(img.src),'Invalid image.');
        (entry.images ||= []).push({src:img.src,caption:escape(img.caption)});
        entry.hiddenImages=entry.hiddenImages.filter(src=>src!==img.src);
      }
      return;
    }
    if (record.kind === 'direct') {
      const subject=data.subjects.find(s=>s.id===record.subject);
      requireValue(subject && id.test(record.category) && id.test(record.id),'Invalid destination.');
      let destination=category(data,record.subject,record.category);
      if (!destination) {
        requireValue(record.categoryName,'Missing category name.');
        destination={id:record.category,label:escape(record.categoryName),elements:[]};
        subject.categories.push(destination);
      }
      let entry=destination.elements.find(e=>e.id===record.id);
      if (!record.existing) {
        requireValue(!entries(data).some(e=>e.id===record.id),'This type already exists.');
        entry={id:record.id,label:escape(record.title),specs:[],images:[],contributed:true};
        destination.elements.push(entry);
      }
      requireValue(entry,'Select an existing type.');
      entry.specs ||= [];
      for (const p of record.properties) {
        const label=escape(p.label)+(record.scope?' ('+escape(record.scope)+')':'');
        const index=entry.specs.findIndex(s=>s.label.toLowerCase()===label.toLowerCase());
        const value={label,value:escape(p.value),...(hex.test(p.value)?{type:'color'}:{})};
        if(index<0) entry.specs.push(value); else entry.specs[index]=value;
      }
      if(record.attachment) {
        requireValue(/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(record.attachment.src),'Invalid screenshot.');
        (entry.images ||= []).push({src:record.attachment.src,caption:escape(record.attachment.caption)});
      }
      return;
    }
    const c = category(data, record.subject, record.category);
    requireValue(c, 'The destination category is missing.');
    const images = [record.image,record.attachment].filter(Boolean).map(img => ({src:img.src,caption:escape(img.caption)}));
    const attribution = escape(record.source);
    const reviewLink = record.issue ? ' · <a href="https://github.com/' + repository + '/issues/' + Number(record.issue) + '">Review history</a>' : '';
    if (record.kind === 'spec') {
      requireValue(!entries(data).some(e => e.id === record.id), 'Duplicate spec ID: ' + record.id);
      const el = {id:record.id, label:escape(record.title), scope:escape(record.scope), contributed:true,
        specs:record.properties.map(p => ({label:escape(p.label), value:escape(p.value), ...(hex.test(p.value) ? {type:'color'} : {})})),
        images, banners:[{type:'note',text:'Applies to ' + escape(record.scope)}, {type:'note',text:attribution + reviewLink}]};
      if (record.related.length) {
        const all = entries(data);
        const links = record.related.map(key => '<a href="?spec=' + encodeURIComponent(key) + '">' + all.find(e => e.id === key).label + '</a>');
        el.banners.push({type:'info',text:'Shared rules · ' + links.join(' · ')});
      }
      c.elements.push(el);
    } else {
      const el = c.elements.find(e => e.id === record.target);
      requireValue(el && JSON.stringify(colors(el)) === JSON.stringify(record.before), 'Palette baseline mismatch for ' + record.target);
      el.specs.forEach(row => { if (!Object.hasOwn(row, 'sourceLabel')) row.sourceLabel = row.label; });
      el.specs.splice(record.position, record.operation === 'edit' ? 1 : 0, {label:'',value:record.color,type:'color',
        sourceLabel:null,
        contributionNote:escape(record.role) + ' · ' + escape(record.scope) + ' · ' + attribution,
        issue:record.issue, ...(record.figureId ? {figure:record.figureId} : {})});
      el.specs.forEach((row,i) => { row.label = colorLabel(el.id, i); });
      for (const img of images) {
        el.images ||= [];
        if (!el.images.some(i => i.src === img.src && i.caption === img.caption)) el.images.push(img);
      }
    }
  }
  return {repository, palettes, entries, category, colors, colorLabel, slug, validate, afterColors, apply};
})();
if (typeof module !== 'undefined') module.exports = SpecChanges;
