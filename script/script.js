//console.log(document);
//console.log(document.body)
console.log(window);
const submitConfigBtnElement = document.getElementById("btn-submit");
const resultSectionElement = document.getElementById("result-section");
const resetBtnElement = document.getElementById("btn-reset");
// const formData = document.getElementById('value-a');
// k= formData.textContent='hi';
// console.log(k)

const hideResultParagraphElement =
  document.childNodes[1].childNodes[2].childNodes[3].children[1].children[0];
hideResultParagraphElement.style.display = "none";

const valueOfAElement = document.getElementById("value-a");
const valueOfBElement = document.getElementById("value-b");
const valueOfCElement = document.getElementById("value-c");

const resultShowElement = document.getElementById("result-show");
console.log(resultShowElement);
let sum;
function add(a, b) {
  return (c = a + b);
}
function addElement(event) {
  event.preventDefault();
  const formDataAElement = document.getElementById("inputA");
  const dataAElement = +formDataAElement.value;

  const formDataBElement = document.getElementById("inputB");
  const dataBElement = +formDataBElement.value;
  //   console.log(typeof(dataAElement));
  //   console.log(dataBElement)

  dataResultElement = add(dataAElement, dataBElement);

  //resultShowElement.children[1].add(formDataAElement);

  hideResultParagraphElement.style.display = "block";

  const AElement =
    document.childNodes[1].childNodes[2].childNodes[3].children[1].children[0]
      .children[0];
  AElement.textContent = dataAElement;
  const BElement =
    document.childNodes[1].childNodes[2].childNodes[3].children[1].children[0]
      .children[1];
  BElement.textContent = dataBElement;
  const CElement =
    document.childNodes[1].childNodes[2].childNodes[3].children[1].children[0]
      .children[2];
  CElement.textContent = dataResultElement;
}

function clearAllFormData(){
  hideResultParagraphElement.style.display = 'none';


}
submitConfigBtnElement.addEventListener("click", addElement);
resetBtnElement.addEventListener('click',clearAllFormData);
//dom manupalation
// const element1 = document.firstElementChild.children[1].children[0].children[0];
// element1.textContent = "new file";

// const element2 = document.firstElementChild.children[1].children[0].children[1];
// element2.textContent = "paragraph"

// const element3 = document.firstElementChild.children[1].children[1].children[0].children[1].children[0].childNodes[0];
// element3.textContent = 'btn';
