require('./style.css');
const driven = require('./Images/driven.png')
const addImage = require('./addImage.js')
// console.log(addImage);
// console.log(driven.default);

function vamosCodar(){
    
    // Colocando o título
    const root = document.querySelector('.root');
    const titleContainer = document.createElement('h1');
    titleContainer.append('Vamos Codar!');
    root.appendChild(titleContainer);

    // Colocando a imagem
    root.appendChild(addImage(driven.default));

}

vamosCodar();