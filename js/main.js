

const zoom = document.querySelector('#zoom');
const upDown = document.querySelector('#upDown');
const leftRight = document.querySelector('#leftRight');

const inputElement = document.querySelector('input');
const reader = new FileReader();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const img = document.createElement('img');

let finalHeight;
let finalWidth;
let x = leftRight.value/100;
let y = upDown.value/100;
let canW = canvas.width;
let canH = canvas.height;
let height = canH;
let width = canW;
let scale = 1;
let mouseDown = 0;


document.body.onmousedown = () => {
  ++mouseDown;
};
document.body.onmouseup = () => {
  --mouseDown;
};

const setFinal = () => {
  finalWidth = width;
  finalHeight = height * scale;
};

const redrawImage = (evt) =>{
  setFinal();
  ctx.clearRect(0, 0, canW, canH);
  ctx.drawImage(img, x * canW - finalWidth/2 , y * canH - finalHeight/2, finalWidth, finalHeight);
};

const getMousePos = (canvas, evt) => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (evt.clientX - rect.left)/canW,
    y: (evt.clientY - rect.top)/canH
  };
};

inputElement.addEventListener('change', (evt) => {
  const file = inputElement.files[0];
  reader.readAsDataURL(file);
});

reader.addEventListener('load', (evt) => {
  img.src = reader.result;
});

img.addEventListener('load', (evt) => {
  scale = img.height/img.width;
  redrawImage();
});

zoom.addEventListener('input', (evt) =>{
  redrawImage();
});


upDown.addEventListener('input', (evt) => {
  redrawImage();
});

leftRight.addEventListener('input', (evt) => {
  redrawImage();
});

canvas.addEventListener('mousemove', (evt) => {
  if(mouseDown){
    let mousePos = getMousePos(canvas, evt);
    x = mousePos.x;
    y = mousePos.y;
  }
  redrawImage();
});

document.addEventListener('wheel', (evt) => {
  console.log(evt.deltaY);
  let scroll;
  if (evt.deltaY + width > 0){
    width += evt.deltaY;
    height += evt.deltaY;
  }
  redrawImage();
});

const setWidthHeight = () =>{
  width = 50 + zoom.value * 5;
  height =  50 + zoom.value * 5;
};
