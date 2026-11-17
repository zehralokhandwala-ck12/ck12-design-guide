/* Presentation only: separate explicit compound values without changing source rules. */
function structuredSpecValue(value, context='') {
  if(typeof value!=='string'||/[<>]/.test(value))return value;
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fields=[];
  const ordered=items=>items.sort((a,b)=>{const order=['Font family','Font style / usage','Font size','Size','Fill color','Stroke width','Stroke color','Color','Opacity','Other settings'];return order.indexOf(a[0])-order.indexOf(b[0]);});
  const hollow=value.match(/^Fill\s+(#[\da-f]{3,8})\s*·\s*Stroke\s+([\d.]+\s*(?:px|pt))\s+(#[\da-f]{3,8})$/i);
  if(hollow){fields.push(['Fill color',hollow[1]],['Stroke width',hollow[2]],['Stroke color',hollow[3]]);}
  else {
    const font=value.match(/^((?:Latin Modern Roman(?: CK12)?|Proxima Nova(?: Regular| Bold)?|CMU Serif(?: Roman)?|Arial|Myriad Pro)),\s*([\d.]+\s*(?:px|pt))(?=\s*[,·]|$)(.*)$/i);
    if(!font){
      if(!/^(?:#[\da-f]{3,8}|[\d.]+\s*(?:px|pt))/i.test(value))return value;
      let parts=value.split(/\s*[,·]\s*/);const output=[];
      for(const part of parts){
        const color=part.match(/^(#[\da-f]{3,8})(?:\s*(?:@|at)\s*([\d.]+%)\s*opacity)?$/i);
        if(color){output.push(['Color',color[1]]);if(color[2])output.push(['Opacity',color[2]]);continue;}
        if(/^[\d.]+%\s*opacity$/i.test(part)){output.push(['Opacity',part.replace(/\s*opacity/i,'')]);continue;}
        if(/^[\d.]+\s*(?:px|pt)$/i.test(part)){output.push([/stroke|line|ray|arrow|outline|grid/i.test(context)?'Stroke width':'Size',part]);continue;}
        output.push(['Other settings',part]);
      }
      if(output.length<2||!output.some(([label])=>label==='Color'))return value;
      return '<dl class="compound-spec">'+ordered(output).map(([label,value])=>'<div><dt>'+escape(label)+'</dt><dd>'+escape(value)+'</dd></div>').join('')+'</dl>';
    }
    fields.push(['Font family',font[1]],['Font size',font[2]]);
    let rest=font[3].replace(/^\s*[,·]\s*/,'').trim();
    const color=rest.match(/^(#[\da-f]{3,8})(?:\s*@\s*([\d.]+%)\s*opacity)?(?:\s*[,·]\s*|$)/i);
    if(color){fields.push(['Color',color[1]]);if(color[2])fields.push(['Opacity',color[2]]);rest=rest.slice(color[0].length).trim();}
    if(rest)fields.push(['Font style / usage',rest]);
  }
  return '<dl class="compound-spec">'+ordered(fields).map(([label,value])=>'<div><dt>'+escape(label)+'</dt><dd>'+escape(value)+'</dd></div>').join('')+'</dl>';
}
