function propertyPicker(container, name, values) {
  const choices = {
    Fill: ['Color', 'Opacity'],
    Stroke: ['Color', 'Width', 'Dash', 'Cap', 'Join'],
    Heading: ['Font family', 'Font size', 'Font style', 'Color', 'Alignment'],
    'Body text': ['Font family', 'Font size', 'Font style', 'Color', 'Alignment'],
    Point: ['Color', 'Diameter'],
    Ray: ['Color', 'Width', 'Arrowhead'],
    Spacing: ['Gap', 'Padding'],
    Custom: []
  };
  const controls = document.createElement('div');
  controls.className='property-picker';
  const typeLabel=document.createElement('label');
  typeLabel.textContent='Property type';
  const type=document.createElement('select');
  type.add(new Option('Choose a type',''));
  for(const label of Object.keys(choices)) type.add(new Option(label,label));
  typeLabel.append(type);
  const detailLabel=document.createElement('label');
  detailLabel.textContent='Setting';
  const detail=document.createElement('select');
  detailLabel.append(detail);
  detailLabel.hidden=true;
  controls.append(typeLabel,detailLabel);
  container.prepend(controls);
  function update(){
    if(!type.value||type.value==='Custom'){name.readOnly=false;return}
    name.value=type.value+' '+detail.value.toLowerCase();
    name.readOnly=true;
    for(const input of values){
      input.placeholder=/color/i.test(detail.value)?'#999999':/size|width|diameter|gap|padding/i.test(detail.value)?'e.g. 18 px':/opacity/i.test(detail.value)?'e.g. 40%':/family/i.test(detail.value)?'e.g. Latin Modern Roman':'Enter value';
    }
  }
  type.onchange=()=>{
    detail.replaceChildren();
    for(const setting of choices[type.value]||[])detail.add(new Option(setting,setting));
    detailLabel.hidden=!detail.options.length;
    update();
    if(type.value==='Custom')name.focus();
  };
  detail.onchange=update;
}
