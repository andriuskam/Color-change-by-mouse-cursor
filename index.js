'use strict';

let effect = document.getElementById("effect");
effect.addEventListener('mousemove', e =>{
    let x = e.offsetX;
    console.log(x);
    let y = e.offsetY;
    effect.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
})
