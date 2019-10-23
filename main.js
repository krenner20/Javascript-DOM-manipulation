const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  // console.log(e)
  const element = document.createElement(node);
  const text = document.createTextNode(txt);
  element.appendChild(text);
  if (attr) {
    element.setAttribute(attr, value);
  }
  document.querySelector('.content').appendChild(element);
}

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
  e,
  addForm.elements.node.value,
  addForm.elements.txt.value,
  addForm.elements.attr.value,
  addForm.elements.value.value,
));