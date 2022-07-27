import tacos from './tacos.jpeg';
import quesadilla from './quesadilla.jpeg';
import fluatas from './fluatas.jpeg';
import empanada from './empanadas.jpeg';

const menu = function(){
let menu = ['tacos','quesadilla','fluatas','empanadas'];
let menuImgs = [tacos,quesadilla,fluatas,empanada];
// create 4 divs
const cardContainer = document.createElement('div');
cardContainer.setAttribute('id','card-container');
//inserts the card container before the footer.
const content = document.getElementById('content');
const footer = document.getElementById('footer');
content.insertBefore(cardContainer, footer);

//creates 4 divs with id's of the menu items;
// insert images in each div
for (let i = 0; i < menu.length; i++) {
    const element = menu[i];
    const imgElement = menuImgs[i];
    const imgTag = document.createElement('img');
    const imgCard = document.createElement('div');
    imgCard.setAttribute('id',element + '-card');
    imgCard.setAttribute('class','menu-card');
    imgTag.setAttribute('id',element);
    imgTag.setAttribute('class','menu-img');
    cardContainer.appendChild(imgCard);
    imgCard.appendChild(imgTag);
    document.getElementById(element).src = imgElement;
}
// add description in each div explaining the menu item
const tacosCard = document.getElementById('tacos-card');
const quesadillaCard = document.getElementById('quesadilla-card');
const fluatasCard = document.getElementById('fluatas-card');
const empanadaCard = document.getElementById('empanadas-card');

let menuCardSelectors = [tacosCard, quesadillaCard, fluatasCard, empanadaCard];
// add menu descr to each menu card /
// add id to each menu desc /
// select id and change text content
for (let i = 0; i < 4; i++) {
    const menuDescription = document.createElement('h2');
    menuDescription.setAttribute('id', menu[i] + '-desc');
    menuDescription.setAttribute('class','menu-description');
    menuCardSelectors[i].appendChild(menuDescription);
    console.log('second loop is running' + i);
}


document.getElementById('tacos-desc').textContent = 'Carne asada tacos';
document.getElementById('quesadilla-desc').textContent = 'Chicken quesadillas';
document.getElementById('fluatas-desc').textContent = 'chicken fluatus with beans and rice';
document.getElementById('empanadas-desc').textContent = 'Steak empanadas topped wtih beans and lettuce.';


}

export {menu}