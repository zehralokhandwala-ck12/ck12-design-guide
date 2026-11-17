/* A designer adds a text style or shape, then fills its related settings together. */
function propertyGroups(host, initial = []) {
  const definitions = {
    Text: [
      ['Font family'], ['Font size', '18 px or 16 pt'], ['Font weight', 'Regular, Medium, Bold, or 400–900'],
      ['Font style', ['Normal', 'Italic', 'Oblique']], ['Named font style', 'e.g. 10 Bold Italic'], ['Text color', '#999999'], ['Text opacity', '0–100%'],
      ['Line height / leading', '24 px or Auto'], ['Letter spacing / tracking', '100 tracking or 0.1 em'],
      ['Kerning', 'Auto, Optical, Metrics, or a value'], ['Alignment', ['Left', 'Center', 'Right', 'Justified']],
      ['Text case', ['As written', 'Uppercase', 'Lowercase', 'Title case']],
      ['Decoration', ['None', 'Underline', 'Strikethrough']], ['Baseline shift', '0 pt'],
      ['Script position', ['Normal', 'Superscript', 'Subscript']], ['Paragraph spacing', '8 px'],
      ['Placement / offset'], ['Notes / exceptions']
    ],
    Shape: [
      ['Fill', ['Solid', 'None', 'Gradient', 'Pattern']], ['Fill color', '#80C0FF'], ['Fill opacity', '0–100%'],
      ['Gradient / pattern details'], ['Stroke', ['With stroke', 'Without stroke']],
      ['Stroke color', '#000000'], ['Stroke width', '2 px or 1 pt'], ['Stroke opacity', '0–100%'],
      ['Stroke alignment', ['Center', 'Inside', 'Outside']], ['Stroke pattern', ['Solid', 'Dashed', 'Dotted']],
      ['Dash length', '6 pt'], ['Dash gap', '4 pt'], ['Cap', ['Butt', 'Round', 'Projecting']],
      ['Join', ['Miter', 'Round', 'Bevel']], ['Miter limit'], ['Corner radius', '4 px'],
      ['Width / diameter', '10 px'], ['Height', '10 px'], ['Overall opacity', '0–100%'], ['Notes / exceptions']
    ],
    'Line / arrow': [
      ['Stroke color', '#000000'], ['Stroke width', '2 px or 1 pt'], ['Stroke opacity', '0–100%'],
      ['Stroke pattern', ['Solid', 'Dashed', 'Dotted']], ['Dash length', '6 pt'], ['Dash gap', '4 pt'],
      ['Cap', ['Butt', 'Round', 'Projecting']], ['Join', ['Miter', 'Round', 'Bevel']],
      ['Start arrowhead'], ['End arrowhead'], ['Arrowhead scale', '100%'], ['Length'], ['Notes / exceptions']
    ],
    'Spacing / canvas': [['Width'], ['Height'], ['Padding'], ['Gap'], ['Alignment'], ['Notes / exceptions']],
    Custom: [['Value']]
  };
  function node(parent, tag, text) { const n=document.createElement(tag);if(text)n.textContent=text;parent.append(n);return n; }
  const list=node(host,'div');list.className='property-groups';
  const bar=node(host,'div');bar.className='group-add';
  const label=node(bar,'label','Add a property group');
  const select=node(label,'select');select.setAttribute('aria-label','Property group');
  for(const type of Object.keys(definitions))select.add(new Option(type,type));
  const add=node(bar,'button','+ Add group');add.type='button';
  const hint=node(host,'p','Fill only the settings you know. Blank fields are omitted, not treated as defaults. Include units for sizes and spacing.');hint.className='group-hint';
  const groups=[];
  function create(type, seed) {
    const box=node(list,'fieldset');box.className='property-group';node(box,'legend',type);
    const nameLabel=node(box,'label',type==='Custom'?'Property name':'Name / role');
    const name=node(nameLabel,'input');name.required=true;name.maxLength=100;name.value=seed?.name||'';
    name.placeholder=type==='Text'?'e.g. Axis labels, Heading, Body text':type==='Shape'?'e.g. Bar, Point, Shaded region':'e.g. Equation ray';
    const grid=node(box,'div');grid.className='group-fields';const fields=new Map();
    const advanced=node(box,'details');node(advanced,'summary','More settings');
    const advancedGrid=node(advanced,'div');advancedGrid.className='group-fields';
    const basic={Text:['Font family','Font size','Font weight','Font style','Named font style','Text color','Text opacity'],Shape:['Fill','Fill color','Fill opacity','Stroke','Stroke color','Stroke width','Stroke opacity','Overall opacity'],'Line / arrow':['Stroke color','Stroke width','Stroke opacity','Stroke pattern','Start arrowhead','End arrowhead']}[type];
    if(!basic)advanced.hidden=true;
    for(const [key,options] of definitions[type]){
      const isAdvanced=basic&&!basic.includes(key);
      const label=node(isAdvanced?advancedGrid:grid,'label',key);const input=node(label,Array.isArray(options)?'select':'input');
      input.setAttribute('aria-label',key);
      if(Array.isArray(options)){input.add(new Option('Not specified',''));for(const value of options)input.add(new Option(value,value));}
      else {input.placeholder=options||'Not specified';input.maxLength=500;}
      const existing=seed?.values[key]||'';
      if(input.tagName==='SELECT'&&existing&&!Array.from(input.options).some(o=>o.value===existing))input.add(new Option(existing,existing));
      if(existing&&isAdvanced)advanced.open=true;
      input.value=existing;fields.set(key,{input,label});
    }
    function visibility(){
      for(const [key,{input,label}] of fields){
        let show=true;
        if(type==='Shape'){
          if(key.startsWith('Stroke ')||['Dash length','Dash gap','Cap','Join','Miter limit'].includes(key))show=fields.get('Stroke').input.value!=='Without stroke';
          if(['Fill color','Fill opacity','Gradient / pattern details'].includes(key))show=fields.get('Fill').input.value!=='None';
        }
        label.hidden=!show;input.disabled=!show;
      }
    }
    box.addEventListener('change',visibility);visibility();
    const remove=node(box,'button','Remove group');remove.type='button';remove.onclick=()=>box.remove();
    groups.push({box,name,fields,type,id:seed?.id||crypto.randomUUID(),scope:seed?.scope||''});return name;
  }
  const seeds=new Map();
  for(const row of initial){const meta=row.propertyGroup;if(!meta||!definitions[meta.type])continue; if(!seeds.has(meta.id))seeds.set(meta.id,{...meta,values:{}});seeds.get(meta.id).values[row.groupField]=row.value;}
  for(const seed of seeds.values())create(seed.type,seed);
  add.onclick=()=>create(select.value).focus();
  return {read(){
    const result=[];
    for(const g of groups.filter(g=>g.box.isConnected)){
      const name=g.name.value.trim();if(!name)throw Error('Name each property group, for example Axis labels or Bar fill.');
      let count=0;
      for(const [key,{input}] of g.fields){const value=input.value.trim();if(!value||input.disabled)continue;
        if(/color$/i.test(key)&&!/^#[0-9a-f]{6}$/i.test(value))throw Error(name+': enter a six-digit hex color, such as #999999.');
        if(/opacity$/i.test(key)&&! /^(?:100|\d{1,2})(?:\.\d+)?%?$/.test(value))throw Error(name+': opacity must be between 0 and 100%.');
        if(/opacity$/i.test(key)&&parseFloat(value)>100)throw Error(name+': opacity cannot exceed 100%.');
        result.push({label:(g.type==='Custom'?name:name+' — '+key)+(g.scope?' ('+g.scope+')':''),value,propertyGroup:{id:g.id,type:g.type,name,scope:g.scope},groupField:key});count++;
      }
      if(!count)throw Error('Add at least one setting to '+name+'.');
    }
    return result;
  }};
}
