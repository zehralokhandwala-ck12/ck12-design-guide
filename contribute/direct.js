const $ = id => document.getElementById(id);
const repo = SpecChanges.repository;
const query = new URLSearchParams(location.search);
const option = (select,value,label) => select.add(new Option(label,value));
for(const record of REVIEWED_CHANGES) SpecChanges.apply(DATA,record);
for(const s of DATA.subjects) option($('subject'),s.id,s.label);
const subject=()=>DATA.subjects.find(s=>s.id===$('subject').value);
const category=()=>subject().categories.find(c=>c.id===$('category').value);
function destinations(){
  $('category').replaceChildren();
  for(const c of subject().categories)option($('category'),c.id,c.label);
  option($('category'),'','+ New category');
  types();
}
function types(){
  $('newcat').hidden=!!category();
  $('entry').replaceChildren(); option($('entry'),'','+ New diagram or graph type');
  for(const e of category()?.elements||[]) option($('entry'),e.id,e.label);
  $('namebox').hidden=false;
}
$('subject').value=query.get('subject')||'math';if(!subject())$('subject').selectedIndex=0;
destinations(); if(subject().categories.some(c=>c.id===query.get('category'))) $('category').value=query.get('category');
types();
const target=query.get('target');
if(target && [...$('entry').options].some(o=>o.value===target)) $('entry').value=target;
$('namebox').hidden=!!$('entry').value;
$('subject').onchange=destinations;$('category').onchange=types;$('entry').onchange=()=>$('namebox').hidden=!!$('entry').value;
function row(){
  const div=document.createElement('div');div.className='prop-row';
  for(const [label,hint] of [['Property','Point color, ray color, stroke…'],['Value','#999999 or 2 px']]){
    const l=document.createElement('label');l.textContent=label;const i=document.createElement('input');i.required=true;i.maxLength=label==='Property'?100:500;i.placeholder=hint;l.append(i);div.append(l);
  }
  const b=document.createElement('button');b.type='button';b.className='plain';b.textContent='Remove';b.onclick=()=>div.remove();div.append(b);$('rows').append(div);
}
row();$('add').onclick=row;
$('editor').onsubmit=async event=>{
  event.preventDefault();$('submit').disabled=true;$('status').textContent='Saving…';
  try{
    const key=$('key').value.trim();if(!key)throw Error('Open Editor access and enter your GitHub editor token.');
    const properties=[...$('rows').children].map(r=>{const [k,v]=r.querySelectorAll('input');return {label:k.value.trim(),value:v.value.trim()}});
    if(!properties.length || properties.some(p=>!p.label||!p.value))throw Error('Add a property and its value.');
    const title=$('entry').value?$('entry').selectedOptions[0].text:$('name').value.trim();
    const r={kind:'direct',id:$('entry').value||SpecChanges.slug(title),title,existing:!!$('entry').value,subject:subject().id,category:category()?.id||SpecChanges.slug($('catname').value),categoryName:category()?'':$('catname').value.trim(),properties,scope:$('scope').value.trim(),date:new Date().toISOString()};
    if(!r.id||!r.category||!title)throw Error('Enter the name of the new category or diagram.');
    if(!r.existing && SpecChanges.entries(DATA).some(e=>e.id===r.id))throw Error('This diagram exists. Select it above to edit its properties.');
    const file=$('image').files[0];
    if(file){
      if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>450000)throw Error('Choose a PNG, JPEG or WebP screenshot under 450 KB.');
      r.attachment={src:'data:'+file.type+';base64,'+base64(new Uint8Array(await file.arrayBuffer())),caption:$('caption').value.trim()||title};
    }
    SpecChanges.apply(structuredClone(DATA),r);
    await saveGuideChange(key,r,title);
    $('editor').hidden=true;$('status').textContent='Saved to GitHub. The guide will update after GitHub Pages publishes.';$('result').hidden=false;$('result').href='../?spec='+r.id;
  }catch(err){$('status').textContent=err.message}finally{$('submit').disabled=false}
};
