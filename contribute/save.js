function base64(bytes){let s='';for(const b of bytes)s+=String.fromCharCode(b);return btoa(s)}
async function saveGuideChange(key,r,title){
  const endpoint='https://api.github.com/repos/'+SpecChanges.repository+'/contents/contribute/published.js';
    const headers={Authorization:'Bearer '+key,Accept:'application/vnd.github+json'};
    const response=await fetch(endpoint+'?ref=main',{headers,cache:'no-store'});
    if(!response.ok)throw Error('GitHub could not open the guide. Check your editor access.');
    const current=await response.json();
    let encoded=current.content;
    if(!encoded){
      const blob=await fetch('https://api.github.com/repos/'+SpecChanges.repository+'/git/blobs/'+current.sha,{headers,cache:'no-store'});
      if(!blob.ok)throw Error('GitHub could not read the current guide. Try again.');
      encoded=(await blob.json()).content;
    }
    const source=new TextDecoder().decode(Uint8Array.from(atob(encoded),c=>c.charCodeAt(0)));
    const prefix='const REVIEWED_CHANGES = ';
    if(!source?.startsWith(prefix))throw Error('Reload the guide and try again.');
    const records=JSON.parse(source.trim().slice(prefix.length,-1));
    if(JSON.stringify(records)!==JSON.stringify(REVIEWED_CHANGES))throw Error('A teammate saved a change. Wait for the guide to update, then reload before editing.');
    
    const body={message:'Update guide: '+title,branch:'main',sha:current.sha,content:base64(new TextEncoder().encode(prefix+JSON.stringify([...records,r],null,2)+';\n'))};
    const saved=await fetch(endpoint,{method:'PUT',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify(body)});
    if(!saved.ok)throw Error(saved.status===409?'A teammate saved first. Reload before retrying.':'GitHub could not save. Check that your account can write to this repository.');
}
