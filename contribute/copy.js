(() => {
  const pattern = /#(?:[a-f\d]{8}|[a-f\d]{6}|[a-f\d]{4}|[a-f\d]{3})\b/ig;
  const status = document.createElement('output');
  status.setAttribute('aria-live','polite');
  status.style.cssText='position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);background:#20372c;color:white;border-radius:6px;z-index:99999';
  document.body.append(status);
  let timer;
  function decorate(root) {
    if (root.nodeType !== 1 && root.nodeType !== 3) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=root.nodeType===3?[root]:[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    for(const n of nodes){
      if(!n.parentElement || n.parentElement.closest('button,a,input,textarea,select,script,style,output,svg,[contenteditable]')) continue;
      const matches=[...n.data.matchAll(pattern)];
      if(!matches.length) continue;
      const frag=document.createDocumentFragment(); let start=0;
      for(const m of matches){
        frag.append(n.data.slice(start,m.index));
        const b=document.createElement('button'); b.type='button'; b.dataset.copyHex=m[0]; b.title='Copy '+m[0]; b.setAttribute('aria-label',b.title);
        b.style.cssText='font:inherit;color:inherit;background:transparent;border:0;border-bottom:1px dotted currentColor;padding:0 .1em;cursor:copy';
        b.textContent=m[0]; frag.append(b); start=m.index+m[0].length;
      }
      frag.append(n.data.slice(start)); n.replaceWith(frag);
    }
  }
  document.addEventListener('click',async e=>{
    const b=e.target.closest('button'); if(!b)return;
    const hex=b.dataset.copyHex || (b.matches('.sw-btn') && b.getAttribute('onclick')?.match(/cp\('(#[a-f\d]+)'\)/i)?.[1]);
    if(!hex)return;
    e.preventDefault();e.stopImmediatePropagation();
    try {await navigator.clipboard.writeText(hex);status.textContent='Copied '+hex;}
    catch {window.prompt('Copy this color',hex);return;}
    status.style.padding='.45em .8em';clearTimeout(timer);timer=setTimeout(()=>{status.textContent='';status.style.padding='0'},1800);
  },true);
  decorate(document.body);
  new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes)decorate(n)}).observe(document.body,{subtree:true,childList:true});
})();
