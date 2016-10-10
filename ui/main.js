console.log('Loaded!');
// cha
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

// move image
var img = document.getElementById('madi');
img.onclick = function (){
    img.style.marginLeft = '150px';
};
