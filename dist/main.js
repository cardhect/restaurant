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
const contactForm = document.createElement('form');
//insert form into container
contactContainer.appendChild(contactForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDUzs7QUFFaEQsb0RBQVE7QUFDUiw2REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ib2R5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy90YWJOYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGVmIGZyb20gXCIuL2NoZWYuanBnXCI7XG5jb25zdCBhYm91dCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNyZWF0ZSBhYm91dCBkaXYuXG4gICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnYWJvdXQtY29udGFpbmVyJyk7XG4gICAgLy9pbnNlcnQgYWJvdXQgZGl2IGluIG1haW4gYm9keSBzZWN0aW9uXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGFib3V0Q29udGFpbmVyLCBmb290ZXIpO1xuICAgIC8vY3JlYXRlIGltZyBkaXZcbiAgICBjb25zdCBjaGVmc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoZWZzSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCdjaGVmJyk7XG4gICAgY2hlZnNJbWcuc3JjID0gY2hlZjtcbiAgICAvL2luc2VydCBpbWcgaW4gYWJvdXQgZGl2XG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZnNJbWcpO1xuICAgIC8vY3JlYXRlIGgyIHdpdGggZGVzYyBleHBsYWluaW5nIGluZm8gYWJvdXQgdGhlIHJlc3RydWFudCBhbmQgdGhlIGNoZWZcbiAgICBjb25zdCBjaGVmQWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNoZWZBYm91dC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlZi1hYm91dCcpO1xuICAgIGNoZWZBYm91dC50ZXh0Q29udGVudCA9ICdDaGVmIENhcmRlbmFzIHN0YXJ0ZWQgaGlzIGtpdGNoZW4gaW4gMTk5OSBhZnRlciByZWFsaXppbmcgdGhhdCBoZSB3b3VsZCBhbHdheXMgd2FudCB0byBoYXZlIGhpcyBtb3RoZXIgY29va2luZy4gSGUgdG9vayBpdCB1cG9uIGhpbXNlbGYgdG8gYXJjaGl2ZSBhbGwgdGhlIGZhbWlseSByZWNpcGVzLiBBZnRlciB5ZWFycyBvZiBwZXJmZWN0aW5nIGhpcyBjcmFmdCBoZSBpcyBmaW5hbGx5IGFibGUgdG8gYnJpbmcgdGhlIGhvbWUgc3R5bGUgY29va2luZyBoZSBncmV3IHVwIGxvdmluZyB0byB0aGUgcGVvcGxlIG9mIHRoaXMgd29ybGQuJ1xuICAgIC8vaW5zZXJ0IGgyIHRvIGFib3V0IGRpdi5cbiAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVmQWJvdXQpO1xufVxuXG5leHBvcnQge2Fib3V0fSIsIlxuXG5jb25zdCBib2R5ID0gZnVuY3Rpb24oKSB7XG4gICAgLy9lbGVtZW50c1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdpZCcsJ21haW4tYm9keScpO1xuICAgIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kKGJvZHkpO1xuICAgIFxuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tYm9keScpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZS1jb250YWluZXInKTtcbiAgICBcbiAgICBtYWluQm9keS5hcHBlbmQoY29udGFpbmVyKTtcbiAgICBcbiAgICBjb25zdCBoZWxsb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVsbG9EaXYuc2V0QXR0cmlidXRlKCdpZCcsJ2hlbGxvJyk7XG4gICAgICBoZWxsb0Rpdi5pbm5lckhUTUwgPSBcIvCfjK4g8J+Mr/CfjLbvuI9cIiArICc8L2JyPicgK1wiTWV4aWNhbiBDdWlzaW5lIGJ5IENoZWYgQ2FyZGVuYXMuXCI7IFxuICAgIFxuICAgIC8vc2VsZWN0ZWQgZWxlbWVudHNcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1jb250YWluZXInKTtcbiAgICBcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQoaGVsbG9EaXYpO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxufVxuXG5leHBvcnQgeyBib2R5IH1cbiIsImNvbnN0IGNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbi8vY3JlYXRlIGNvbnRhY3QgY29udGFpbmVyXG5jb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0LWNvbnRhaW5lcicpO1xuLy9pbnNlcnQgYmVmb3JlIGZvb3RlclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG5jb250ZW50Lmluc2VydEJlZm9yZShjb250YWN0Q29udGFpbmVyLCBmb290ZXIpO1xuLy9jcmVhdGUgY29udGFjdCBmb3JtXG5jb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbi8vaW5zZXJ0IGZvcm0gaW50byBjb250YWluZXJcbmNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG59XG5leHBvcnQge2NvbnRhY3R9OyIsImNvbnN0IGZvb3RlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9vdGVyJyk7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChmb290ZXIpO1xufVxuXG5leHBvcnQgeyBmb290ZXIgfTsiLCJpbXBvcnQgdGFjb3MgZnJvbSAnLi90YWNvcy5qcGVnJztcbmltcG9ydCBxdWVzYWRpbGxhIGZyb20gJy4vcXVlc2FkaWxsYS5qcGVnJztcbmltcG9ydCBmbHVhdGFzIGZyb20gJy4vZmx1YXRhcy5qcGVnJztcbmltcG9ydCBlbXBhbmFkYSBmcm9tICcuL2VtcGFuYWRhcy5qcGVnJztcblxuY29uc3QgbWVudSA9IGZ1bmN0aW9uKCl7XG5sZXQgbWVudSA9IFsndGFjb3MnLCdxdWVzYWRpbGxhJywnZmx1YXRhcycsJ2VtcGFuYWRhcyddO1xubGV0IG1lbnVJbWdzID0gW3RhY29zLHF1ZXNhZGlsbGEsZmx1YXRhcyxlbXBhbmFkYV07XG4vLyBjcmVhdGUgNCBkaXZzXG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjYXJkLWNvbnRhaW5lcicpO1xuLy9pbnNlcnRzIHRoZSBjYXJkIGNvbnRhaW5lciBiZWZvcmUgdGhlIGZvb3Rlci5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuY29udGVudC5pbnNlcnRCZWZvcmUoY2FyZENvbnRhaW5lciwgZm9vdGVyKTtcblxuLy9jcmVhdGVzIDQgZGl2cyB3aXRoIGlkJ3Mgb2YgdGhlIG1lbnUgaXRlbXM7XG4vLyBpbnNlcnQgaW1hZ2VzIGluIGVhY2ggZGl2XG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbWVudVtpXTtcbiAgICBjb25zdCBpbWdFbGVtZW50ID0gbWVudUltZ3NbaV07XG4gICAgY29uc3QgaW1nVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsZWxlbWVudCArICctY2FyZCcpO1xuICAgIGltZ0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ21lbnUtY2FyZCcpO1xuICAgIGltZ1RhZy5zZXRBdHRyaWJ1dGUoJ2lkJyxlbGVtZW50KTtcbiAgICBpbWdUYWcuc2V0QXR0cmlidXRlKCdjbGFzcycsJ21lbnUtaW1nJyk7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDYXJkKTtcbiAgICBpbWdDYXJkLmFwcGVuZENoaWxkKGltZ1RhZyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCkuc3JjID0gaW1nRWxlbWVudDtcbn1cbi8vIGFkZCBkZXNjcmlwdGlvbiBpbiBlYWNoIGRpdiBleHBsYWluaW5nIHRoZSBtZW51IGl0ZW1cbmNvbnN0IHRhY29zQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWNvcy1jYXJkJyk7XG5jb25zdCBxdWVzYWRpbGxhQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzYWRpbGxhLWNhcmQnKTtcbmNvbnN0IGZsdWF0YXNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsdWF0YXMtY2FyZCcpO1xuY29uc3QgZW1wYW5hZGFDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtcGFuYWRhcy1jYXJkJyk7XG5cbmxldCBtZW51Q2FyZFNlbGVjdG9ycyA9IFt0YWNvc0NhcmQsIHF1ZXNhZGlsbGFDYXJkLCBmbHVhdGFzQ2FyZCwgZW1wYW5hZGFDYXJkXTtcbi8vIGFkZCBtZW51IGRlc2NyIHRvIGVhY2ggbWVudSBjYXJkIC9cbi8vIGFkZCBpZCB0byBlYWNoIG1lbnUgZGVzYyAvXG4vLyBzZWxlY3QgaWQgYW5kIGNoYW5nZSB0ZXh0IGNvbnRlbnRcbmZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIG1lbnVbaV0gKyAnLWRlc2MnKTtcbiAgICBtZW51RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ21lbnUtZGVzY3JpcHRpb24nKTtcbiAgICBtZW51Q2FyZFNlbGVjdG9yc1tpXS5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xuICAgIGNvbnNvbGUubG9nKCdzZWNvbmQgbG9vcCBpcyBydW5uaW5nJyArIGkpO1xufVxuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWNvcy1kZXNjJykudGV4dENvbnRlbnQgPSAnQ2FybmUgYXNhZGEgdGFjb3MnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXNhZGlsbGEtZGVzYycpLnRleHRDb250ZW50ID0gJ0NoaWNrZW4gcXVlc2FkaWxsYXMnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsdWF0YXMtZGVzYycpLnRleHRDb250ZW50ID0gJ2NoaWNrZW4gZmx1YXR1cyB3aXRoIGJlYW5zIGFuZCByaWNlJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbXBhbmFkYXMtZGVzYycpLnRleHRDb250ZW50ID0gJ1N0ZWFrIGVtcGFuYWRhcyB0b3BwZWQgd3RpaCBiZWFucyBhbmQgbGV0dHVjZS4nO1xuXG5cbn1cblxuZXhwb3J0IHttZW51fSIsImNvbnN0IG5hdiA9IGZ1bmN0aW9uICgpIHtcblx0bGV0IGxpbmtzQXJyYXkgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkFib3V0XCIsIFwiQ29udGFjdFwiXTtcblx0Ly9jcmVhdGVkIGVsZW1lbnRzXG4gICAgY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBsaW5rc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnbGlua3MtY29udGFpbmVyJyk7ICBcblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ICAgIG5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1iYXJcIik7XG5cdGNvbnN0IHNpdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBzaXRlTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpdGUtbmFtZVwiKTtcbiAgICAgICAgc2l0ZU5hbWUudGV4dENvbnRlbnQgPSBcIkNvY2luYSBDYXJkZW5hc1wiO1xuXHRcbiAgICAgLy9kb20gZWxlbWVudHNcblx0Y29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0ICAgIGNvbnRlbnREaXYuYXBwZW5kKG5hdik7IFxuXG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJhclwiKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZChzaXRlTmFtZSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmQobGlua3NDb250YWluZXIpXG5cblxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGlua3NBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGxpbmtzQXJyYXlbaW5kZXhdO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcblx0XHRcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0ICAgIGxpbmtzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2LWxpbmtzXCIpO1xuICAgICAgICAgICAgbGlua3Muc2V0QXR0cmlidXRlKCdpZCcsZWxlbWVudCk7XG4gICAgICAgICAgICBsaW5rcy50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cbiAgICAgXHRcbiAgICAgICAgbGlua3NDb250YWluZXIuYXBwZW5kKGxpbmtzKVxuXG5cdH1cblxuICAgIC8vc2V0IGJ1dHRvbiBhY3Rpb25zXG4gICAgXG4gICAgLy9ob21lIGJ1dHRvblxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hvbWUnKVxuXG5cbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNZW51JylcbiAgICBsZXQgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQWJvdXQnKVxuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbnRhY3QnKVxufTtcblxuZXhwb3J0IHsgbmF2IH07XG4iLCJpbXBvcnQgeyBuYXYgfSBmcm9tICcuL25hdic7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSAnLi9ib2R5JztcbmltcG9ydCB7IGZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcblxuY29uc3QgcGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBuYXYoKTtcbiAgICBib2R5KCk7XG4gICAgZm9vdGVyKCk7XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkIH07IiwiaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuL2JvZHlcIjtcbmltcG9ydCB7bWVudX0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHtjb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHthYm91dH0gZnJvbSAnLi9hYm91dCc7XG5cbmNvbnN0IHRhYk5hdmlnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAvL0NsZWFycyB0aGUgbmV4dCBzaWJpbGluZyBvZiBuYXZiYXIgYW5kIGluc2VydHMgZ2l2ZW4gY29udGVudCB3aXRoIGZ1bmN0aW9uLlxuICAgIGZ1bmN0aW9uIGNsZWFyTWFpbih0YWIpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJhclwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobmF2QmFyLm5leHRTaWJsaW5nKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXJcIik7XG5cbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoZm9vdGVyLCB0YWIoKSk7XG4gICAgfVxuICAgIC8vRXZlbnQgbGlzdGVuZXJzIGZvciBuYXYgbGlua3MgdG8gcmVtb3ZlIHBhZ2VMb2FkIGFuZCBsb2FkIGRpZmZlcmVudCBmdW5jdGlvbnMganNcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua3NcIik7XG5cbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuYXZMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcblx0bmF2TGlua3NbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGxpbmtJZCA9IG5hdkxpbmtzW2luZGV4XS5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuXHRcdGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgXCIgKyBsaW5rSWQpO1xuXHRcdC8vd2lsbCBydW4gZnVuY3Rpb24gdG8gZGlzcGxheSBkaWZmZXJlbnQgdGFic1xuXHRcdGlmIChsaW5rSWQgPT0gXCJIb21lXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwidHJ1ZSwgdGhpcyBpcyBob21lXCIpO1xuICAgICAgICAgICAgY2xlYXJNYWluKGJvZHkpO1xuICAgICAgICAgICAgXG5cdFx0fSBlbHNlIGlmIChsaW5rSWQgPT0gXCJNZW51XCIpIHtcbiAgICAgICAgICAgIGNsZWFyTWFpbihtZW51KTtcblx0XHRcdFxuXHRcdH0gZWxzZSBpZiAobGlua0lkID09IFwiQWJvdXRcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cnVlLCB0aGlzIGlzIHRoZSBhYm91dFwiKTtcblx0XHRcdGNsZWFyTWFpbihhYm91dCk7XG5cdFx0fSBlbHNlIGlmIChsaW5rSWQgPT0gXCJDb250YWN0XCIpIHtcblx0XHRcdGNsZWFyTWFpbihjb250YWN0KTtcblx0XHRcdGNvbnNvbGUubG9nKFwidHJ1ZSwgdGhpcyBpcyB0aGUgY29udGFjdFwiKTtcblx0XHR9XG5cdH0pO1xufVxufVxuXG5leHBvcnQge3RhYk5hdmlnYXRpb259OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyB0YWJOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdGFiTmF2aWdhdGlvblwiO1xuXG5wYWdlTG9hZCgpO1xudGFiTmF2aWdhdGlvbigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=