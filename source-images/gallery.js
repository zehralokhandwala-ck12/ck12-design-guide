const query = document.getElementById('query');
const subject = document.getElementById('subject');
const statusLine = document.getElementById('status');
const template = document.getElementById('figure-template');
const sections = [];
const parameters = new URLSearchParams(location.search);
query.value = parameters.get('q') || '';

function showMatches() {
  const words = query.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let matches = 0;
  for (const section of sections) {
    let count = 0;
    for (const card of section.cards) {
      const visible = (!subject.value || section.subject === subject.value)
        && words.every(word => card.terms.includes(word));
      card.figure.hidden = !visible;
      if (visible) count++;
    }
    section.element.hidden = count === 0;
    matches += count;
  }
  statusLine.textContent = matches ? `${matches} figure${matches === 1 ? '' : 's'}` : 'No matching figures. Try another topic or subject.';
}

function filterChanged() {
  const url = new URL(location.href);
  for (const [key, value] of [['q', query.value.trim()], ['subject', subject.value]]) {
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  url.hash = '';
  history.replaceState(null, '', url);
  showMatches();
}

function buildSection(doc) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.textContent = doc.title;
  const source = document.createElement('p');
  source.className = 'source';
  source.textContent = doc.file;
  const grid = document.createElement('div');
  grid.className = 'grid';
  const cards = [];
  for (const item of doc.figures) {
    const figure = template.content.firstElementChild.cloneNode(true);
    figure.id = item.id;
    const original = figure.querySelector('.original');
    original.href = item.src;
    original.setAttribute('aria-label', 'Open original image: ' + item.title);
    const img = figure.querySelector('img');
    img.src = item.src;
    img.alt = item.title;
    img.width = item.width;
    img.height = item.height;
    figure.querySelector('h3').textContent = item.title;
    const link = figure.querySelector('.permalink');
    link.href = './#' + item.id;
    link.textContent = 'Figure link · ' + item.location;
    link.setAttribute('aria-label', 'Link to ' + doc.title + ', ' + item.location + ', ' + item.title);
    if (item.specId) {
      const spec = document.createElement('a');
      const destination = new URLSearchParams({spec: item.specId});
      if (item.specRow) destination.set('row', item.specRow);
      if (item.specGrade) destination.set('grade', item.specGrade);
      spec.href = '../?' + destination.toString();
      spec.textContent = item.specRow ? 'View placement rule' : 'Working spec';
      spec.setAttribute('aria-label', spec.textContent + ' for ' + item.title);
      link.after(' · ', spec);
    }
    if (item.reviewNote) {
      const note = document.createElement('p');
      note.textContent = item.reviewNote;
      figure.querySelector('figcaption').append(note);
    }
    grid.append(figure);
    cards.push({ figure, terms: [doc.title, doc.subject, doc.file, item.title, item.location, item.src].join(' ').toLowerCase() });
  }
  section.append(title, source, grid);
  document.getElementById('documents').append(section);
  sections.push({ element: section, subject: doc.subject, cards });
}

async function loadCatalog() {
  const response = await fetch('catalog.json?v=figure-return-links');
  if (!response.ok) throw new Error('Catalog unavailable');
  const documents = await response.json();
  for (const name of new Set(documents.map(doc => doc.subject))) subject.add(new Option(name, name));
  subject.value = parameters.get('subject') || '';
  documents.forEach(buildSection);
  showMatches();
  document.getElementById(location.hash.slice(1))?.scrollIntoView();
}

document.getElementById('filters').addEventListener('submit', event => event.preventDefault());
query.addEventListener('input', filterChanged);
subject.addEventListener('change', filterChanged);
loadCatalog().catch(() => { statusLine.textContent = 'The image catalog could not load. Reload this page to try again.'; });
