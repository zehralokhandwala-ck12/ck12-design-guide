document.addEventListener('click', event => {
  const trigger=event.target.closest('[data-edit-card]');
  if(!trigger)return;
  const card=trigger.closest('.spec-card');
  const body=card.querySelector('.card-body');
  const id=trigger.dataset.editCard;
  const subject=editableCards.subjects.find(s=>s.categories.some(c=>c.elements.some(e=>e.id===id)));
  const category=subject.categories.find(c=>c.elements.some(e=>e.id===id));
  const entry=category.elements.find(e=>e.id===id);
  const form=document.createElement('form');
  form.className='inline-editor';
  function append(parent,tag,text){
    const child=document.createElement(tag);
    if(text!==undefined)child.textContent=text;
    parent.append(child);
    return child;
  }
  function plain(value){
    return new DOMParser().parseFromString(String(value),'text/html').body.textContent;
  }
  function button(parent,text,action){
    const b=append(parent,'button',text);b.type='button';b.onclick=action;return b;
  }
  function input(parent,label,value=''){
    const box=append(parent,'label',label),field=append(box,'input');field.value=value;return field;
  }
  function group(title){
    const field=append(form,'fieldset');append(field,'legend',title);return field;
  }
  const readers={};
  function properties(field,existing,columns){
    const section=group(field==='grade'?'Grade comparison':'Properties'),list=append(section,'div');
    const rows=new Map();
    function add(original,index){
      const row=append(list,'div');row.className='edit-row';
      const before=[original.label||'',...(field==='grade'?original.values||columns.map(()=>''):[original.value||''])].map(plain);
      const inputs=['Property',...columns].map((label,i)=>{const box=input(row,label,before[i]);box.required=true;return box});
      button(row,'Remove',()=>{rows.delete(row);row.remove()});
      rows.set(row,()=>{
        const values=inputs.map(i=>i.value.trim());
        if(index>=0 && values.every((v,i)=>v===before[i]))return {index};
        return {index,edit:true,label:values[0],...(field==='grade'?{values:values.slice(1)}:{value:values[1]})};
      });
      return inputs[0];
    }
    existing.forEach(add);button(section,'+ Add property',()=>add({},-1).focus());
    readers[field]=()=>Array.from(rows.values(),read=>read());
  }
  properties('specs',entry.specs||[],['Value']);
  if(entry.gradeTable)properties('grade',entry.gradeTable.rows,entry.gradeTable.columns.slice(1));
  const images=group('Reference images'),removed=new Set(),added=[];
  const originals=[...(mathReviewLinks[id]?.images||[]),...(entry.images||[]),...(entry.archivalImages||[])];
  for(const [i,img] of originals.entries()){
    if(entry.hiddenImages?.includes(img.src)||originals.findIndex(o=>o.src===img.src)!==i)continue;
    const row=append(images,'div');row.className='edit-row';const thumb=append(row,'img');thumb.src=img.src;thumb.alt=plain(img.caption||'Reference');
    append(row,'span',thumb.alt);button(row,'Remove image',()=>{removed.add(img.src);row.remove()});
  }
  button(images,'+ Add image',()=>{
    const row=append(images,'div');row.className='edit-row';
    const file=input(row,'PNG, JPEG or WebP · up to 450 KB');file.type='file';file.accept='image/png,image/jpeg,image/webp';file.required=true;
    const caption=input(row,'Caption');added.push({row,file,caption});
    button(row,'Remove',()=>row.remove());
  });
  const access=append(form,'details');append(access,'summary','Editor access');
  const token=input(access,'GitHub editor token');token.type='password';token.autocomplete='off';
  const help=append(access,'a','Editor access setup');help.href='contribute/';help.target='_blank';help.rel='noopener';
  const actions=append(form,'div'),save=append(actions,'button','Save changes');save.type='submit';
  function cancel(){form.remove();body.hidden=false;trigger.hidden=false;trigger.focus()}
  button(actions,'Cancel',cancel);
  const status=append(form,'p');status.setAttribute('role','status');
  form.onsubmit=async e=>{
    e.preventDefault();if(!token.value.trim()){access.open=true;token.focus();status.textContent='Enter your editor token to save.';return}
    save.disabled=true;
    try{
      const addImages=[];
      for(const item of added.filter(a=>a.row.isConnected)){
        const file=item.file.files[0];
        if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>450000)throw Error('Choose a PNG, JPEG or WebP under 450 KB.');
        addImages.push({src:'data:'+file.type+';base64,'+base64(new Uint8Array(await file.arrayBuffer())),caption:item.caption.value.trim()||plain(entry.label)});
      }
      const rows=Object.fromEntries(Object.entries(readers).map(([field,read])=>[field,read()]));
      const record={kind:'card-edit',subject:subject.id,category:category.id,id,rows,removeImages:[...removed],addImages,date:new Date().toISOString()};
      SpecChanges.apply(structuredClone(editableCards),record);
      await saveGuideChange(token.value.trim(),record,plain(entry.label));
      token.value='';form.replaceChildren();append(form,'p','Saved. GitHub Pages will publish your changes shortly.');const link=append(form,'a','Reload this card');link.href='?spec='+id;
    }catch(err){status.textContent=err.message;save.disabled=false}
  };
  body.hidden=true;trigger.hidden=true;card.append(form);form.querySelector('input')?.focus();
});
