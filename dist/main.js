/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.jpg */ "./src/chef.jpg");

const about = function() {
    // create about div.
    const aboutContainer = document.createElement('div');
    aboutContainer.setAttribute('id','about-container');
    //insert about div in main body section
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');
    content.insertBefore(aboutContainer, footer);
    //create img div
    const chefsImg = document.createElement('img');
    chefsImg.setAttribute('id','chef');
    chefsImg.src = _chef_jpg__WEBPACK_IMPORTED_MODULE_0__;
    //insert img in about div
    aboutContainer.appendChild(chefsImg);
    //create h2 with desc explaining info about the restruant and the chef
    const chefAbout = document.createElement('h2');
    chefAbout.setAttribute('id','chef-about');
    chefAbout.textContent = 'Chef Cardenas started his kitchen in 1999 after realizing that he would always want to have his mother cooking. He took it upon himself to archive all the family recipes. After years of perfecting his craft he is finally able to bring the home style cooking he grew up loving to the people of this world.'
    //insert h2 to about div.
    aboutContainer.appendChild(chefAbout);
}



/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body)
/* harmony export */ });


const body = function() {
    //elements
    const contentDiv = document.getElementById('content');
    
    const body = document.createElement('div')
    body.setAttribute('id','main-body');
    
    contentDiv.append(body);
    
    const mainBody = document.getElementById('main-body');
    
    const container = document.createElement("div");
    container.setAttribute('id','title-container');
    
    mainBody.append(container);
    
    const helloDiv = document.createElement('div');
      helloDiv.setAttribute('id','hello');
      helloDiv.innerHTML = "🌮 🌯🌶️" + '</br>' +"Mexican Cuisine by Chef Cardenas."; 
    
    //selected elements
    const titleContainer = document.getElementById('title-container');
    
    titleContainer.append(helloDiv);
    
    
    
    
}




/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const contact = function() {
//create contact container
const contactContainer = document.createElement('div');
contactContainer.setAttribute('id','contact-container');
//insert before footer
const content = document.getElementById('content');
const footer = document.getElementById('footer');
content.insertBefore(contactContainer, footer);
//create contact form
const contact = document.createElement('div');
contact.setAttribute('id','contact-div');

const h1 = document.createElement('h1');
h1.setAttribute('id','contact-info');
h1.innerHTML = "(000)-123-4567 "+ "<br></br>" + "395 Rue de la Couronne, Quebec CA"
contact.appendChild(h1);
//insert form into container
contactContainer.appendChild(contact);

}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
const footer = function() {
    const footer = document.createElement('div');
    footer.setAttribute('id','footer');
    const contentDiv = document.getElementById('content');

    contentDiv.append(footer);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _tacos_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tacos.jpeg */ "./src/tacos.jpeg");
/* harmony import */ var _quesadilla_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quesadilla.jpeg */ "./src/quesadilla.jpeg");
/* harmony import */ var _fluatas_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fluatas.jpeg */ "./src/fluatas.jpeg");
/* harmony import */ var _empanadas_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empanadas.jpeg */ "./src/empanadas.jpeg");





const menu = function(){
let menu = ['tacos','quesadilla','fluatas','empanadas'];
let menuImgs = [_tacos_jpeg__WEBPACK_IMPORTED_MODULE_0__,_quesadilla_jpeg__WEBPACK_IMPORTED_MODULE_1__,_fluatas_jpeg__WEBPACK_IMPORTED_MODULE_2__,_empanadas_jpeg__WEBPACK_IMPORTED_MODULE_3__];
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



/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
const nav = function () {
	let linksArray = ["Home", "Menu", "About", "Contact"];
	//created elements
    const linksContainer = document.createElement('ul');
        linksContainer.setAttribute('id','links-container');  
	const nav = document.createElement("div");
	    nav.setAttribute("id", "nav-bar");
	const siteName = document.createElement("h1");
        siteName.setAttribute("id", "site-name");
        siteName.textContent = "Cocina Cardenas";
	
     //dom elements
	const contentDiv = document.getElementById("content");
	    contentDiv.append(nav); 

        const navBar = document.getElementById("nav-bar");
        navBar.append(siteName);
        navBar.append(linksContainer)


	for (let index = 0; index < linksArray.length; index++) {
        const element = linksArray[index];
        console.log(element);
		
        const links = document.createElement("li");
		    links.setAttribute("class", "nav-links");
            links.setAttribute('id',element);
            links.textContent = element;

     	
        linksContainer.append(links)

	}

    //set button actions
    
    //home button
    let homeButton = document.getElementById('Home')


    let menuButton = document.getElementById('Menu')
    let aboutButton = document.getElementById('About')
    let contactButton = document.getElementById('Contact')
};




/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");




const pageLoad = function() {
    (0,_nav__WEBPACK_IMPORTED_MODULE_0__.nav)();
    (0,_body__WEBPACK_IMPORTED_MODULE_1__.body)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footer)();
}



/***/ }),

/***/ "./src/tabNavigation.js":
/*!******************************!*\
  !*** ./src/tabNavigation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabNavigation": () => (/* binding */ tabNavigation)
/* harmony export */ });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");





const tabNavigation = function () {
   //Clears the next sibiling of navbar and inserts given content with function.
    function clearMain(tab) {
        const content = document.getElementById('content');
        const navBar = document.getElementById("nav-bar");
        
        content.removeChild(navBar.nextSibling);
    
        const footer = document.querySelector("#footer");

        content.insertBefore(footer, tab());
    }
    //Event listeners for nav links to remove pageLoad and load different functions js
const navLinks = document.querySelectorAll(".nav-links");

for (let index = 0; index < navLinks.length; index++) {
	navLinks[index].addEventListener("click", function () {
		let linkId = navLinks[index].attributes[1].value;
		console.log("you clicked " + linkId);
		//will run function to display different tabs
		if (linkId == "Home") {
			console.log("true, this is home");
            clearMain(_body__WEBPACK_IMPORTED_MODULE_0__.body);
            
		} else if (linkId == "Menu") {
            clearMain(_menu__WEBPACK_IMPORTED_MODULE_1__.menu);
			
		} else if (linkId == "About") {
			console.log("true, this is the about");
			clearMain(_about__WEBPACK_IMPORTED_MODULE_3__.about);
		} else if (linkId == "Contact") {
			clearMain(_contact__WEBPACK_IMPORTED_MODULE_2__.contact);
			console.log("true, this is the contact");
		}
	});
}
}



/***/ }),

/***/ "./src/chef.jpg":
/*!**********************!*\
  !*** ./src/chef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38ca81a2e9f8af8ca9dc.jpg";

/***/ }),

/***/ "./src/empanadas.jpeg":
/*!****************************!*\
  !*** ./src/empanadas.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7001df6be6d0fd60b7ea.jpeg";

/***/ }),

/***/ "./src/fluatas.jpeg":
/*!**************************!*\
  !*** ./src/fluatas.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ba3509035869adfdffe.jpeg";

/***/ }),

/***/ "./src/quesadilla.jpeg":
/*!*****************************!*\
  !*** ./src/quesadilla.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33b8e9905de6a02b0d89.jpeg";

/***/ }),

/***/ "./src/tacos.jpeg":
/*!************************!*\
  !*** ./src/tacos.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9070a9072892c05b03e.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
/* harmony import */ var _tabNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabNavigation */ "./src/tabNavigation.js");



(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
(0,_tabNavigation__WEBPACK_IMPORTED_MODULE_1__.tabNavigation)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ1M7O0FBRWhELG9EQUFRO0FBQ1IsNkRBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvdGFiTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlZiBmcm9tIFwiLi9jaGVmLmpwZ1wiO1xuY29uc3QgYWJvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBjcmVhdGUgYWJvdXQgZGl2LlxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Fib3V0LWNvbnRhaW5lcicpO1xuICAgIC8vaW5zZXJ0IGFib3V0IGRpdiBpbiBtYWluIGJvZHkgc2VjdGlvblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShhYm91dENvbnRhaW5lciwgZm9vdGVyKTtcbiAgICAvL2NyZWF0ZSBpbWcgZGl2XG4gICAgY29uc3QgY2hlZnNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVmc0ltZy5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlZicpO1xuICAgIGNoZWZzSW1nLnNyYyA9IGNoZWY7XG4gICAgLy9pbnNlcnQgaW1nIGluIGFib3V0IGRpdlxuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWZzSW1nKTtcbiAgICAvL2NyZWF0ZSBoMiB3aXRoIGRlc2MgZXhwbGFpbmluZyBpbmZvIGFib3V0IHRoZSByZXN0cnVhbnQgYW5kIHRoZSBjaGVmXG4gICAgY29uc3QgY2hlZkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjaGVmQWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2NoZWYtYWJvdXQnKTtcbiAgICBjaGVmQWJvdXQudGV4dENvbnRlbnQgPSAnQ2hlZiBDYXJkZW5hcyBzdGFydGVkIGhpcyBraXRjaGVuIGluIDE5OTkgYWZ0ZXIgcmVhbGl6aW5nIHRoYXQgaGUgd291bGQgYWx3YXlzIHdhbnQgdG8gaGF2ZSBoaXMgbW90aGVyIGNvb2tpbmcuIEhlIHRvb2sgaXQgdXBvbiBoaW1zZWxmIHRvIGFyY2hpdmUgYWxsIHRoZSBmYW1pbHkgcmVjaXBlcy4gQWZ0ZXIgeWVhcnMgb2YgcGVyZmVjdGluZyBoaXMgY3JhZnQgaGUgaXMgZmluYWxseSBhYmxlIHRvIGJyaW5nIHRoZSBob21lIHN0eWxlIGNvb2tpbmcgaGUgZ3JldyB1cCBsb3ZpbmcgdG8gdGhlIHBlb3BsZSBvZiB0aGlzIHdvcmxkLidcbiAgICAvL2luc2VydCBoMiB0byBhYm91dCBkaXYuXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZkFib3V0KTtcbn1cblxuZXhwb3J0IHthYm91dH0iLCJcblxuY29uc3QgYm9keSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vZWxlbWVudHNcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb250ZW50RGl2LmFwcGVuZChib2R5KTtcbiAgICBcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgbWFpbkJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgaGVsbG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlbGxvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdoZWxsbycpO1xuICAgICAgaGVsbG9EaXYuaW5uZXJIVE1MID0gXCLwn4yuIPCfjK/wn4y277iPXCIgKyAnPC9icj4nICtcIk1leGljYW4gQ3Vpc2luZSBieSBDaGVmIENhcmRlbmFzLlwiOyBcbiAgICBcbiAgICAvL3NlbGVjdGVkIGVsZW1lbnRzXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKGhlbGxvRGl2KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IHsgYm9keSB9XG4iLCJjb25zdCBjb250YWN0ID0gZnVuY3Rpb24oKSB7XG4vL2NyZWF0ZSBjb250YWN0IGNvbnRhaW5lclxuY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdC1jb250YWluZXInKTtcbi8vaW5zZXJ0IGJlZm9yZSBmb290ZXJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuY29udGVudC5pbnNlcnRCZWZvcmUoY29udGFjdENvbnRhaW5lciwgZm9vdGVyKTtcbi8vY3JlYXRlIGNvbnRhY3QgZm9ybVxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdC1kaXYnKTtcblxuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuaDEuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3QtaW5mbycpO1xuaDEuaW5uZXJIVE1MID0gXCIoMDAwKS0xMjMtNDU2NyBcIisgXCI8YnI+PC9icj5cIiArIFwiMzk1IFJ1ZSBkZSBsYSBDb3Vyb25uZSwgUXVlYmVjIENBXCJcbmNvbnRhY3QuYXBwZW5kQ2hpbGQoaDEpO1xuLy9pbnNlcnQgZm9ybSBpbnRvIGNvbnRhaW5lclxuY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxufVxuZXhwb3J0IHtjb250YWN0fTsiLCJjb25zdCBmb290ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgZm9vdGVyIH07IiwiaW1wb3J0IHRhY29zIGZyb20gJy4vdGFjb3MuanBlZyc7XG5pbXBvcnQgcXVlc2FkaWxsYSBmcm9tICcuL3F1ZXNhZGlsbGEuanBlZyc7XG5pbXBvcnQgZmx1YXRhcyBmcm9tICcuL2ZsdWF0YXMuanBlZyc7XG5pbXBvcnQgZW1wYW5hZGEgZnJvbSAnLi9lbXBhbmFkYXMuanBlZyc7XG5cbmNvbnN0IG1lbnUgPSBmdW5jdGlvbigpe1xubGV0IG1lbnUgPSBbJ3RhY29zJywncXVlc2FkaWxsYScsJ2ZsdWF0YXMnLCdlbXBhbmFkYXMnXTtcbmxldCBtZW51SW1ncyA9IFt0YWNvcyxxdWVzYWRpbGxhLGZsdWF0YXMsZW1wYW5hZGFdO1xuLy8gY3JlYXRlIDQgZGl2c1xuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FyZC1jb250YWluZXInKTtcbi8vaW5zZXJ0cyB0aGUgY2FyZCBjb250YWluZXIgYmVmb3JlIHRoZSBmb290ZXIuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbmNvbnRlbnQuaW5zZXJ0QmVmb3JlKGNhcmRDb250YWluZXIsIGZvb3Rlcik7XG5cbi8vY3JlYXRlcyA0IGRpdnMgd2l0aCBpZCdzIG9mIHRoZSBtZW51IGl0ZW1zO1xuLy8gaW5zZXJ0IGltYWdlcyBpbiBlYWNoIGRpdlxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG1lbnVbaV07XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IG1lbnVJbWdzW2ldO1xuICAgIGNvbnN0IGltZ1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLGVsZW1lbnQgKyAnLWNhcmQnKTtcbiAgICBpbWdDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWNhcmQnKTtcbiAgICBpbWdUYWcuc2V0QXR0cmlidXRlKCdpZCcsZWxlbWVudCk7XG4gICAgaW1nVGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWltZycpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4gICAgaW1nQ2FyZC5hcHBlbmRDaGlsZChpbWdUYWcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLnNyYyA9IGltZ0VsZW1lbnQ7XG59XG4vLyBhZGQgZGVzY3JpcHRpb24gaW4gZWFjaCBkaXYgZXhwbGFpbmluZyB0aGUgbWVudSBpdGVtXG5jb25zdCB0YWNvc0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFjb3MtY2FyZCcpO1xuY29uc3QgcXVlc2FkaWxsYUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc2FkaWxsYS1jYXJkJyk7XG5jb25zdCBmbHVhdGFzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbHVhdGFzLWNhcmQnKTtcbmNvbnN0IGVtcGFuYWRhQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbXBhbmFkYXMtY2FyZCcpO1xuIFxubGV0IG1lbnVDYXJkU2VsZWN0b3JzID0gW3RhY29zQ2FyZCwgcXVlc2FkaWxsYUNhcmQsIGZsdWF0YXNDYXJkLCBlbXBhbmFkYUNhcmRdO1xuLy8gYWRkIG1lbnUgZGVzY3IgdG8gZWFjaCBtZW51IGNhcmQgL1xuLy8gYWRkIGlkIHRvIGVhY2ggbWVudSBkZXNjIC9cbi8vIHNlbGVjdCBpZCBhbmQgY2hhbmdlIHRleHQgY29udGVudFxuZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgbWVudVtpXSArICctZGVzYycpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIG1lbnVDYXJkU2VsZWN0b3JzW2ldLmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XG4gICAgY29uc29sZS5sb2coJ3NlY29uZCBsb29wIGlzIHJ1bm5pbmcnICsgaSk7XG59XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhY29zLWRlc2MnKS50ZXh0Q29udGVudCA9ICdDYXJuZSBhc2FkYSB0YWNvcyc7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc2FkaWxsYS1kZXNjJykudGV4dENvbnRlbnQgPSAnQ2hpY2tlbiBxdWVzYWRpbGxhcyc7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmx1YXRhcy1kZXNjJykudGV4dENvbnRlbnQgPSAnY2hpY2tlbiBmbHVhdHVzIHdpdGggYmVhbnMgYW5kIHJpY2UnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtcGFuYWRhcy1kZXNjJykudGV4dENvbnRlbnQgPSAnU3RlYWsgZW1wYW5hZGFzIHRvcHBlZCB3dGloIGJlYW5zIGFuZCBsZXR0dWNlLic7XG5cblxufVxuXG5leHBvcnQge21lbnV9IiwiY29uc3QgbmF2ID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgbGlua3NBcnJheSA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQWJvdXRcIiwgXCJDb250YWN0XCJdO1xuXHQvL2NyZWF0ZWQgZWxlbWVudHNcbiAgICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGxpbmtzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdsaW5rcy1jb250YWluZXInKTsgIFxuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHQgICAgbmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWJhclwiKTtcblx0Y29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHNpdGVOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l0ZS1uYW1lXCIpO1xuICAgICAgICBzaXRlTmFtZS50ZXh0Q29udGVudCA9IFwiQ29jaW5hIENhcmRlbmFzXCI7XG5cdFxuICAgICAvL2RvbSBlbGVtZW50c1xuXHRjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHQgICAgY29udGVudERpdi5hcHBlbmQobmF2KTsgXG5cbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYmFyXCIpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kKHNpdGVOYW1lKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZChsaW5rc0NvbnRhaW5lcilcblxuXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5rc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbGlua3NBcnJheVtpbmRleF07XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuXHRcdFxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHQgICAgbGlua3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtbGlua3NcIik7XG4gICAgICAgICAgICBsaW5rcy5zZXRBdHRyaWJ1dGUoJ2lkJyxlbGVtZW50KTtcbiAgICAgICAgICAgIGxpbmtzLnRleHRDb250ZW50ID0gZWxlbWVudDtcblxuICAgICBcdFxuICAgICAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmQobGlua3MpXG5cblx0fVxuXG4gICAgLy9zZXQgYnV0dG9uIGFjdGlvbnNcbiAgICBcbiAgICAvL2hvbWUgYnV0dG9uXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSG9tZScpXG5cblxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01lbnUnKVxuICAgIGxldCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBYm91dCcpXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ29udGFjdCcpXG59O1xuXG5leHBvcnQgeyBuYXYgfTtcbiIsImltcG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2JztcbmltcG9ydCB7IGJvZHkgfSBmcm9tICcuL2JvZHknO1xuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuXG5jb25zdCBwYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIG5hdigpO1xuICAgIGJvZHkoKTtcbiAgICBmb290ZXIoKTtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWQgfTsiLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4vYm9keVwiO1xuaW1wb3J0IHttZW51fSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQge2NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQge2Fib3V0fSBmcm9tICcuL2Fib3V0JztcblxuY29uc3QgdGFiTmF2aWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgIC8vQ2xlYXJzIHRoZSBuZXh0IHNpYmlsaW5nIG9mIG5hdmJhciBhbmQgaW5zZXJ0cyBnaXZlbiBjb250ZW50IHdpdGggZnVuY3Rpb24uXG4gICAgZnVuY3Rpb24gY2xlYXJNYWluKHRhYikge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYmFyXCIpO1xuICAgICAgICBcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChuYXZCYXIubmV4dFNpYmxpbmcpO1xuICAgIFxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3RlclwiKTtcblxuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShmb290ZXIsIHRhYigpKTtcbiAgICB9XG4gICAgLy9FdmVudCBsaXN0ZW5lcnMgZm9yIG5hdiBsaW5rcyB0byByZW1vdmUgcGFnZUxvYWQgYW5kIGxvYWQgZGlmZmVyZW50IGZ1bmN0aW9ucyBqc1xuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcblxuZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5hdkxpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRuYXZMaW5rc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgbGlua0lkID0gbmF2TGlua3NbaW5kZXhdLmF0dHJpYnV0ZXNbMV0udmFsdWU7XG5cdFx0Y29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBcIiArIGxpbmtJZCk7XG5cdFx0Ly93aWxsIHJ1biBmdW5jdGlvbiB0byBkaXNwbGF5IGRpZmZlcmVudCB0YWJzXG5cdFx0aWYgKGxpbmtJZCA9PSBcIkhvbWVcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cnVlLCB0aGlzIGlzIGhvbWVcIik7XG4gICAgICAgICAgICBjbGVhck1haW4oYm9keSk7XG4gICAgICAgICAgICBcblx0XHR9IGVsc2UgaWYgKGxpbmtJZCA9PSBcIk1lbnVcIikge1xuICAgICAgICAgICAgY2xlYXJNYWluKG1lbnUpO1xuXHRcdFx0XG5cdFx0fSBlbHNlIGlmIChsaW5rSWQgPT0gXCJBYm91dFwiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInRydWUsIHRoaXMgaXMgdGhlIGFib3V0XCIpO1xuXHRcdFx0Y2xlYXJNYWluKGFib3V0KTtcblx0XHR9IGVsc2UgaWYgKGxpbmtJZCA9PSBcIkNvbnRhY3RcIikge1xuXHRcdFx0Y2xlYXJNYWluKGNvbnRhY3QpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cnVlLCB0aGlzIGlzIHRoZSBjb250YWN0XCIpO1xuXHRcdH1cblx0fSk7XG59XG59XG5cbmV4cG9ydCB7dGFiTmF2aWdhdGlvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCB7IHRhYk5hdmlnYXRpb24gfSBmcm9tIFwiLi90YWJOYXZpZ2F0aW9uXCI7XG5cbnBhZ2VMb2FkKCk7XG50YWJOYXZpZ2F0aW9uKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==