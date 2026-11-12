const search = document.querySelector('#search');
const topics = Array.from(document.querySelectorAll('.topic'));
const normalized = value => value.toLowerCase().replaceAll('—', ' ');

// Read the published values from the guide's own data so editorial changes carry through.
function addGuideWording(entry) {
  const topic = document.getElementById(entry.id);
  if (!topic) return;
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = 'Current guide wording';
  const list = document.createElement('ul');
  function add(text) {
    const li = document.createElement('li');
    li.textContent = text;
    list.append(li);
  }
  for (const spec of entry.specs || []) add(spec.label + ' · ' + spec.value);
  if (entry.gradeTable) {
    for (const row of entry.gradeTable.rows) {
      add(row.label + ' · ' + row.values.map((v, i) => entry.gradeTable.columns[i + 1] + ' ' + v).join(' / '));
    }
  }
  for (const banner of entry.banners || []) {
    add(new DOMParser().parseFromString(banner.text, 'text/html').body.textContent);
  }
  details.append(summary, list);
  topic.querySelector('h2').after(details);
}

if (typeof DATA !== 'undefined') {
  DATA.subjects.find(subject => subject.id === 'math')?.categories.forEach(category => category.elements.forEach(addGuideWording));
}

function applySearch() {
  const query = normalized(search.value.trim());
  const grade = query.match(/\bgrade\s*(10|[6-9])\b/);
  const words = query.replace(grade?.[0] || '', '').trim().split(/\s+/).filter(Boolean);
  const matches = text => words.every(word => normalized(text).includes(word));
  let visible = 0;
  for (const topic of topics) {
    const title = topic.querySelector('h2').textContent;
    let found = false;
    for (const row of topic.querySelectorAll('.prop')) {
      const value = grade ? row.cells[Number(grade[1]) - 4].textContent : row.textContent;
      row.hidden = (grade && value === 'Unspecified') || !matches(title + ' ' + row.cells[0].textContent + ' ' + value);
      if (!row.hidden) found = true;
    }
    for (const detail of topic.querySelectorAll('details')) {
      let count = 0;
      for (const item of detail.querySelectorAll('figure, li')) {
        const content = item.textContent;
        item.hidden = !matches(title + ' ' + content) || (grade && !content.includes('Grade ' + grade[1]));
        if (!item.hidden) count++;
      }
      detail.hidden = count === 0;
      detail.open = Boolean(query && count);
      if (count) found = true;
    }
    topic.hidden = Boolean(query && !found);
    if (!topic.hidden) visible++;
  }
  document.querySelector('#matches').textContent = query ? visible + ' matching topics' : '';
}

function revealTarget() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target) return;
  if (target.closest('.topic')?.hidden) {
    search.value = '';
    applySearch();
  }
  const details = target.closest('details');
  if (details) details.open = true;
  if (target.classList.contains('topic')) {
    const current = target.querySelector('details');
    if (current?.querySelector('summary')?.textContent === 'Current guide wording') current.open = true;
  }
  target.scrollIntoView();
}

document.querySelector('#filters').addEventListener('submit', event => event.preventDefault());
search.addEventListener('input', applySearch);
window.addEventListener('hashchange', revealTarget);
search.value = new URLSearchParams(location.search).get('q') || '';
applySearch();
if (location.hash) revealTarget();
else if (search.value) document.querySelector('#comparison').scrollIntoView();
