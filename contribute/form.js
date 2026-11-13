const el = id => document.getElementById(id);
const params = new URLSearchParams(location.search);
const storeKey = 'ck12-spec-draft-v1:' + ['kind','subject','category','target','operation'].map(k => params.get(k) || '').join('/');
const form = el('editor');
const subjects = DATA.subjects;
const all = () => SpecChanges.entries(DATA);
let figures = [], related = [], baseline = [], prepared;
let saveEnabled = true;
const ids = ['kind','subject','category','title','target','operation','position','color','role','scope','source','figure','caption'];

function node(tag, text) {
  const n = document.createElement(tag);
  if (text !== undefined) n.textContent = text;
  return n;
}
function options(select, rows) {
  select.replaceChildren(...rows.map(([value, label]) => new Option(label, value)));
}
function getSubject() { return subjects.find(s => s.id === el('subject').value); }
function getPalette() { return all().find(e => e.id === el('target').value); }
function chooseCategories() {
  options(el('category'),getSubject().categories.map(c => [c.id,c.label]));
}
function palettePositions() {
  const palette = getPalette();
  const count = palette.specs.length + (el('operation').value === 'add' ? 1 : 0);
  options(el('position'),Array.from({length:count},(_,i) => [i, (i + 1) + (palette.specs[i] ? ' · ' + palette.specs[i].value : ' · End of palette')]));
  el('position').value = el('operation').value === 'add' ? String(count - 1) : '0';
}
function modeChanged() {
  const color = el('kind').value === 'color';
  el('color-fields').hidden = !color;
  el('spec-fields').hidden = color;
  el('subject').disabled = color;
  el('category').disabled = color;
  if (color) {
    el('subject').value = 'math'; chooseCategories(); el('category').value = 'graphs';
    baseline = SpecChanges.colors(getPalette());
    palettePositions();
  }
}
function propertyRow(p = {}) {
  const r = node('div');r.className = 'prop-row';
  for (const [key,name,placeholder,max] of [['label','Property','e.g. Line stroke',100],['value','Value','e.g. 2 px, round cap',500]]) {
    const l=node('label',name),input=node('input');input.dataset.key=key;input.maxLength=max;input.value=p[key] || '';input.placeholder=placeholder;
    l.append(input);r.append(l);
  }
  const remove=node('button','Remove');remove.type='button';remove.className='plain';remove.setAttribute('aria-label','Remove property');
  remove.onclick=()=>{r.remove();save()};r.append(remove);el('properties').append(r);return r;
}
function rows() {
  return [...el('properties').children].map(r => Object.fromEntries([...r.querySelectorAll('input')].map(i => [i.dataset.key,i.value.trim()])));
}
function showRelated() {
  el('related-list').replaceChildren();
  related.forEach(key => {
    const entry=all().find(e => e.id===key);
    if (!entry) return;
    const chip=node('span', entry.label);chip.className='chip';
    const remove=node('button','×');remove.type='button';remove.setAttribute('aria-label','Remove '+entry.label);
    remove.onclick=()=>{related=related.filter(k=>k!==key);showRelated();save()};chip.append(remove);el('related-list').append(chip);
  });
}
function nearby() {
  const name=SpecChanges.slug(el('title').value);
  const matches=name.length<3?[]:all().filter(e=>SpecChanges.slug(e.label).includes(name)||name.includes(SpecChanges.slug(e.label))).slice(0,4);
  const target=el('similar');target.replaceChildren();
  if(matches.length)target.append('Similar entries: ');
  matches.forEach((e,i)=>{const a=node('a',e.label);a.href='../?spec='+encodeURIComponent(e.id);a.target='_blank';a.rel='noopener';if(i)target.append(' · ');target.append(a)});
}
function save() {
  if(!saveEnabled)return;
  const values=Object.fromEntries(ids.map(id=>[id,el(id).value]));
  try {localStorage.setItem(storeKey,JSON.stringify({values,properties:rows(),related,baseline}));el('draft-status').textContent='Draft saved in this browser.'}
  catch {el('draft-status').textContent='Browser storage is unavailable. Keep this tab open while editing.'}
}
function restore(draft) {
  const v=draft?.values || {};
  el('kind').value=v.kind || params.get('kind') || 'spec';
  el('subject').value=v.subject || params.get('subject') || 'math';
  if(!getSubject())el('subject').value='math';
  chooseCategories();
  const category=v.category || params.get('category') || 'graphs';
  if([...el('category').options].some(o=>o.value===category))el('category').value=category;
  el('target').value=v.target || params.get('target') || 'pie-colors';
  if(!getPalette())el('target').value='pie-colors';
  el('operation').value=v.operation || params.get('operation') || 'add';
  modeChanged();
  for(const key of ['title','color','role','scope','source','figure','caption','position'])if(v[key]!==undefined)el(key).value=v[key];
  related=Array.isArray(draft?.related)?draft.related:[];
  el('properties').replaceChildren();(draft?.properties || [{}]).forEach(propertyRow);
  if(draft?.baseline?.length && el('kind').value==='color') {
    if(JSON.stringify(baseline)!==JSON.stringify(draft.baseline)){
      el('error').textContent='The published palette changed since you saved this draft. Select the intended position in the current order and preview it again.';
      palettePositions();
      el('position').selectedIndex=-1;
    }
  }
  showRelated();nearby();
  if(draft)el('draft-status').textContent='Restored your draft from this browser.';
}
function proposal() {
  const record={version:1,kind:el('kind').value,subject:el('subject').value,category:el('category').value,
    scope:el('scope').value,source:el('source').value,figureId:el('figure').value,caption:el('caption').value};
  if(record.kind==='spec')Object.assign(record,{title:el('title').value,properties:rows(),related});
  else Object.assign(record,{target:el('target').value,operation:el('operation').value,position:parseInt(el('position').value,10),
    color:el('color').value.trim(),role:el('role').value,before:baseline});
  return record;
}
function palettePreview(root, title, colors, changed) {
  root.append(node('h3',title));const group=node('div');group.className='palette';
  colors.forEach((color,i)=>{const cell=node('span');cell.className='swatch'+(i===changed?' changed':'');
    const swatch=node('i');swatch.style.backgroundColor=color;cell.append(swatch,node('span',(i+1)+' · '+color));group.append(cell)});
  root.append(group);
}
function preview(event) {
  event.preventDefault();el('error').textContent='';
  try {
    const input=proposal();const checked=SpecChanges.validate(input,DATA,figures);
    const root=el('preview-body');root.replaceChildren();
    const dest=getSubject().label+' › '+el('category').selectedOptions[0].text;
    root.append(node('small',dest),node('h3',checked.kind==='spec'?checked.title:getPalette().label),node('p','Applies to '+checked.scope));
    if(checked.kind==='spec'){
      const table=node('table'),head=node('tr');head.append(node('th','Property'),node('th','Proposed value'));table.append(head);
      for(const p of checked.properties){const tr=node('tr');tr.append(node('td',p.label),node('td',p.value));table.append(tr)}root.append(table);
      if(related.length)root.append(node('p','Shared rules · '+related.map(k=>all().find(e=>e.id===k).label).join(', ')));
    }else{
      palettePreview(root,'Current order',checked.before,checked.operation==='edit'?checked.position:-1);
      palettePreview(root,'Proposed order',SpecChanges.afterColors(checked),checked.position);root.append(node('p',checked.role));
    }
    root.append(node('p','Source or reason · '+checked.source));
    if(checked.image){const img=node('img');img.className='evidence';img.src='../'+checked.image.src;img.alt=checked.image.caption;root.append(img,node('p',checked.image.caption))}
    prepared=input;save();form.hidden=true;el('manual').hidden=true;el('reopen').hidden=true;el('preview').hidden=false;el('preview').focus();
  }catch(err){el('error').textContent=err.message;}
}
function handoff() {
  const p=prepared;
  const what=p.kind==='spec'?p.title:getPalette().label+' · '+p.operation+' '+p.color.toUpperCase();
  const title='[Spec proposal] '+what;
  const details=p.kind==='spec' ? p.properties.map(row=>'- '+row.label+' — '+row.value) :
    ['- Position '+(p.position+1)+' · '+p.role,'- Before: '+p.before.join(' → '),'- After: '+SpecChanges.afterColors(p).join(' → ')];
  const reference=p.figureId ? 'Existing reference: https://zehralokhandwala-ck12.github.io/ck12-design-guide/source-images/#'+p.figureId+' · '+p.caption : '';
  const body=['## Requested change',what,'',...details,'',...(p.related?.length?['Shared rules: '+p.related.join(', '),'']:[]),
    '**Applies to** '+p.scope,'','**Source or reason** '+p.source,'',reference,'',
    '## Reference image','If needed, attach one PNG or JPEG here before submitting.','','## Proposal data',
    '\x60\x60\x60json',JSON.stringify(p,null,2),'\x60\x60\x60','',
    'Maintainer: run [Prepare spec review](https://github.com/'+SpecChanges.repository+'/actions/workflows/prepare-spec.yml) with this issue number, then review the proposed branch.'].join('\n');
  const url=new URL('https://github.com/'+SpecChanges.repository+'/issues/new');url.searchParams.set('title',title);
  el('blank-issue').href=url.href;el('issue-body').value=body;url.searchParams.set('body',body);
  if(url.href.length<=7500){el('reopen').querySelector('a').href=url.href;el('reopen').hidden=false;window.open(url.href,'_blank','noopener');}
  else{el('manual').hidden=false;el('issue-body').focus();el('issue-body').select();}
}
async function init(){
  for(const r of REVIEWED_CHANGES)SpecChanges.apply(DATA,r);
  options(el('subject'),subjects.map(s=>[s.id,s.label]));
  options(el('target'),SpecChanges.palettes.map(id=>[id,all().find(e=>e.id===id).label]));
  for(const s of subjects)for(const c of s.categories)for(const e of c.elements)el('related-add').add(new Option(s.label+' › '+e.label,e.id));
  const result=await fetch('../source-images/catalog.json');if(!result.ok)throw Error('The reference catalog could not load. Reload to try again.');
  const catalog=await result.json();figures=catalog.flatMap(d=>d.figures);
  for(const doc of catalog){const group=node('optgroup');group.label=doc.title;for(const f of doc.figures)group.append(new Option(doc.title+' · '+f.title,f.id));el('figure').append(group)}
  let draft=null;try{draft=JSON.parse(localStorage.getItem(storeKey))}catch{}
  restore(draft);
  el('subject').onchange=()=>{chooseCategories();save()};
  el('kind').onchange=()=>{modeChanged();save()};
  el('target').onchange=()=>{baseline=SpecChanges.colors(getPalette());palettePositions();save()};
  el('operation').onchange=()=>{palettePositions();save()};
  el('title').oninput=nearby;
  el('related-add').onchange=()=>{const k=el('related-add').value;if(k&&!related.includes(k))related.push(k);el('related-add').value='';showRelated();save()};
  el('figure').onchange=()=>{el('caption').value=figures.find(f=>f.id===el('figure').value)?.title || '';save()};
  el('add-row').onclick=()=>{propertyRow().querySelector('input').focus();save()};
  el('discard').onclick=()=>{if(!confirm('Clear this draft?'))return;saveEnabled=false;try{localStorage.removeItem(storeKey)}catch{}location.reload()};
  el('edit').onclick=()=>{el('preview').hidden=true;form.hidden=false;el('kind').focus()};
  el('copy').onclick=async()=>{try{await navigator.clipboard.writeText(el('issue-body').value);el('copy').textContent='Copied'}catch{el('issue-body').select()}};
  el('submit-proposal').onclick=handoff;form.onsubmit=preview;
  form.addEventListener('input',save);form.addEventListener('change',save);
}
form.onsubmit=e=>e.preventDefault();
init().catch(err=>{el('error').textContent=err.message;form.querySelector('[type="submit"]').disabled=true});
