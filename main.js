const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node);
  const text = document.createTextNode(txt);
  element.appendChild(text);
  if (attr) {
    element.setAttribute(attr, value);
  }
  document.querySelector('.content').appendChild(element);
}

const searchElement = (e, nameElement) => {
  e.preventDefault();
  const infoElement = document.querySelector('.result');
  infoElement.textContent = ""; // reset results
  const elements = document.querySelectorAll(nameElement);
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znalazłem <strong>${elements.length}</strong> elementów <strong>${nameElement}</strong></p>`
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie nie znalazłem elementów <strong>${nameElement}</strong></p>`
  }
};

const showInfo = (elements, infoElement) => {
  elements.forEach(element => {
    const item = document.createElement('div');
    item.className = 'result__element-info'
    item.innerHTML = `
  <div><strong>${element.nodeName}</strong></div>
  <div>Klasy: <strong>${element.className}</strong></div>
  <div>Wysokość elementu (offsetHeight): <strong>${element.offsetHeight}</strong></div>
  <div>Szerokość elementu (offsetWidth): <strong>${element.offsetWidth}</strong></div>
  <div>Odległość od lewej krawędzi (offsetLeft): <strong>${element.offsetLeft}</strong></div>
  <div>Odległość od górnej krawędzi (offsetTop): <strong>${element.offsetTop}</strong></div>
  <div>Liczba elementów dzieci (childElementCount): <strong>${element.childElementCount}</strong></div>
    `
    infoElement.appendChild(item);
  })
}

//listeners

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
  e,
  addForm.elements.node.value,
  addForm.elements.txt.value,
  addForm.elements.attr.value,
  addForm.elements.value.value,
));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElement(
  e,
  searchForm.elements["searching-element"].value
));