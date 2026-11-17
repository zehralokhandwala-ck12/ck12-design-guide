/* Recover incomplete input without persisting credentials or uploaded file bytes. */
function editorSession(form,key){
  const storageKey='ck12-editor-v1:'+key;
  const baseline=JSON.stringify(REVIEWED_CHANGES);
  let hash=0;for(const c of baseline)hash=(Math.imul(hash,31)+c.charCodeAt(0))|0;
  let actions=[],replaying=false,dirty=false,finished=false;
  const bar=document.createElement('div');bar.className='draft-bar';
  const message=document.createElement('p');message.setAttribute('role','status');
  message.textContent='Drafts stay in this browser. Tokens and uploaded files are not saved; reattach files after restoring.';
  bar.append(message);form.prepend(bar);
  let saved;try{saved=JSON.parse(localStorage.getItem(storageKey));}catch{}
  function button(text,fn){const b=document.createElement('button');b.type='button';b.textContent=text;b.onclick=fn;bar.append(b);return b;}
  function path(target){const parts=[];while(target&&target!==form){const parent=target.parentElement;if(!parent)return null;parts.unshift(target.tagName.toLowerCase()+':nth-child('+([...parent.children].indexOf(target)+1)+')');target=parent;}return parts.join(' > ');}
  function persist(){try{localStorage.setItem(storageKey,JSON.stringify({hash,actions,date:new Date().toISOString()}));message.textContent='Draft saved in this browser. Reattach uploaded files after restoring; editor tokens are never saved.';}catch{message.textContent='Draft storage is unavailable. Keep this editor open until you save.';}}
  function record(event){
    if(replaying||finished||!form.isConnected||event.target.closest('.draft-bar,.editor-preview'))return;
    const target=event.target;
    if(target.matches('input[type=password],input[type=file]')){if(target.type==='file')dirty=true;return;}
    let action;
    if(event.type==='click'){
      const b=target.closest('button');if(!b||b.type!=='button'||!/^\+|^Remove/.test(b.textContent.trim()))return;
      action={kind:'click',path:path(b)};
    }else if(target.matches('input,select,textarea'))action={kind:'value',path:path(target),value:target.value,event:event.type};
    if(!action?.path)return;dirty=true;actions.push(action);bar.querySelectorAll('button').forEach(b=>{if(b.textContent==='Restore draft')b.disabled=true;});persist();
  }
  form.addEventListener('click',record,true);form.addEventListener('input',record,true);form.addEventListener('change',record,true);
  if(saved?.actions?.length){
    if(saved.hash===hash){
      const restore=button('Restore draft',()=>{
        replaying=true;
        try{for(const action of saved.actions){const target=form.querySelector(action.path);if(!target)throw Error('The form has changed.');if(action.kind==='click'){if(target.tagName!=='BUTTON'||target.type!=='button'||!/^\+|^Remove/.test(target.textContent.trim()))throw Error('Unsupported draft action.');target.click();}else {if(!target.matches('input:not([type=password]):not([type=file]),select,textarea'))throw Error('Unsupported draft field.');target.value=action.value;target.dispatchEvent(new Event(action.event,{bubbles:true}));}}actions=saved.actions.slice();dirty=true;message.textContent='Draft restored. Reattach files and review before saving.';restore.disabled=true;}
        catch{message.textContent='This draft could not be fully restored. Review the fields before saving.';}
        finally{replaying=false;}
      });
      message.textContent='An unfinished draft is available in this browser. Restore it before making new changes.';
    }else message.textContent='A draft exists, but the published guide has changed. Automatic restore is disabled to protect newer edits.';
  }
  button('Discard draft',()=>{try{localStorage.removeItem(storageKey);}catch{}actions=[];saved=null;dirty=false;message.textContent='Stored draft discarded. Your current form is unchanged.';bar.querySelectorAll('button').forEach(b=>{if(b.textContent==='Restore draft')b.disabled=true;});});
  function unload(e){if(dirty&&form.isConnected&&!finished){e.preventDefault();e.returnValue='';}}
  function navigate(e){const link=e.target.closest('a');if(!dirty||!form.isConnected||finished||!link||link.target||link.hasAttribute('download')||link.getAttribute('href')?.startsWith('#'))return;if(!confirm('Leave this editor? Your text draft stays in this browser. Uploaded files must be reattached.')){e.preventDefault();e.stopImmediatePropagation();}}
  window.addEventListener('beforeunload',unload);document.addEventListener('click',navigate,true);
  return {complete(){finished=true;dirty=false;try{localStorage.removeItem(storageKey);}catch{}window.removeEventListener('beforeunload',unload);document.removeEventListener('click',navigate,true);}};
}
function showEditorPreview(form,entry){
  form.querySelector('.editor-preview')?.remove();
  const section=document.createElement('section');section.className='editor-preview';section.tabIndex=-1;
  const plain=s=>new DOMParser().parseFromString(String(s),'text/html').body.textContent;
  const node=(parent,tag,text)=>{const el=document.createElement(tag);if(text!==undefined)el.textContent=text;parent.append(el);return el;};
  node(section,'h2','Preview');node(section,'h3',plain(entry.label));
  node(section,'p','Current form values, not yet published. Changes made after this preview require another preview.');
  function table(headers,rows){const table=node(section,'table');const head=node(node(table,'thead'),'tr');headers.forEach(h=>node(head,'th',plain(h)));const body=node(table,'tbody');for(const row of rows){const tr=node(body,'tr');row.forEach(value=>node(tr,'td',plain(value)));}}
  if(entry.gradeTable)table(entry.gradeTable.columns,entry.gradeTable.rows.map(r=>[r.label,...r.values]));
  if(entry.specs?.length)table(['Property','Value'],entry.specs.map(r=>[r.label,r.value]));
  for(const img of (entry.images||[]).filter(i=>!entry.hiddenImages?.includes(i.src))){const figure=node(section,'figure');const image=node(figure,'img');image.src=img.src;image.alt=plain(img.caption||'Reference');node(figure,'figcaption',plain(img.caption||''));}
  for(const r of entry.resources||[])node(section,'p',r.name+' — '+(r.filename||r.url));
  const close=node(section,'button','Close preview');close.type='button';close.onclick=()=>section.remove();form.append(section);section.focus();section.scrollIntoView({block:'start'});
}
