/* Shared reference-link and downloadable-file controls. */
function resourceEditor(parent, existing = []) {
  const section=document.createElement('fieldset');
  const legend=document.createElement('legend');legend.textContent='Links & files';section.append(legend);
  const hint=document.createElement('p');hint.textContent='Add a Google Drive link or attach any file, including .ai. Up to 5 MB of new attachments per save; use Drive for larger files. Drive sharing permissions still apply.';section.append(hint);
  const rows=[];
  function add(resource, fileMode=false){
    const row=document.createElement('div');row.className='edit-row';
    function field(label,type,value=''){const wrap=document.createElement('label');wrap.textContent=label;const input=document.createElement('input');input.type=type;input.value=value;wrap.append(input);row.append(wrap);return input;}
    const name=field('Display name','text',resource?.name||'');name.maxLength=200;
    const value=resource?.data?null:field(fileMode?'Attach file':'Drive or web link',fileMode?'file':'url',resource?.url||'');
    if(value)value.required=true;
    if(resource?.data){const text=document.createElement('p');text.textContent=resource.filename;row.append(text);}
    const remove=document.createElement('button');remove.type='button';remove.textContent='Remove';remove.onclick=()=>row.remove();row.append(remove);section.append(row);rows.push({row,name,value,resource,fileMode});
  }
  existing.forEach(r=>add(r));
  for(const [label,fileMode] of [['+ Add link',false],['+ Attach file',true]]){const b=document.createElement('button');b.type='button';b.className='plain';b.textContent=label;b.onclick=()=>add(null,fileMode);section.append(b);}
  parent.append(section);
  return async()=>{
    const result=[];let size=0;
    for(const item of rows.filter(r=>r.row.isConnected)){
      const name=item.name.value.trim();
      if(item.resource?.data){result.push({...item.resource,name:name||item.resource.filename});continue;}
      if(item.fileMode){const file=item.value.files[0];if(!file)throw Error('Choose an attachment.');size+=file.size;if(size>5000000)throw Error('Attachments exceed 5 MB. Use a Drive link for larger files.');result.push({name:name||file.name,filename:file.name,data:'data:application/octet-stream;base64,'+base64(new Uint8Array(await file.arrayBuffer()))});}
      else {const url=item.value.value.trim();if(!/^https?:\/\//i.test(url))throw Error('Use an https:// or http:// reference link.');new URL(url);result.push({name:name||url,url});}
    }
    return result;
  };
}
