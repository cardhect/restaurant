/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/***/ (() => {



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabNavigation": () => (/* binding */ tabNavigation)
/* harmony export */ });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_2__);
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

"use strict";
module.exports = __webpack_require__.p + "38ca81a2e9f8af8ca9dc.jpg";

/***/ }),

/***/ "./src/empanadas.jpeg":
/*!****************************!*\
  !*** ./src/empanadas.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7001df6be6d0fd60b7ea.jpeg";

/***/ }),

/***/ "./src/fluatas.jpeg":
/*!**************************!*\
  !*** ./src/fluatas.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ba3509035869adfdffe.jpeg";

/***/ }),

/***/ "./src/quesadilla.jpeg":
/*!*****************************!*\
  !*** ./src/quesadilla.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "33b8e9905de6a02b0d89.jpeg";

/***/ }),

/***/ "./src/tacos.jpeg":
/*!************************!*\
  !*** ./src/tacos.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDUzs7QUFFaEQsb0RBQVE7QUFDUiw2REFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ib2R5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3RhYk5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlZiBmcm9tIFwiLi9jaGVmLmpwZ1wiO1xuY29uc3QgYWJvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBjcmVhdGUgYWJvdXQgZGl2LlxuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Fib3V0LWNvbnRhaW5lcicpO1xuICAgIC8vaW5zZXJ0IGFib3V0IGRpdiBpbiBtYWluIGJvZHkgc2VjdGlvblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShhYm91dENvbnRhaW5lciwgZm9vdGVyKTtcbiAgICAvL2NyZWF0ZSBpbWcgZGl2XG4gICAgY29uc3QgY2hlZnNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVmc0ltZy5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlZicpO1xuICAgIGNoZWZzSW1nLnNyYyA9IGNoZWY7XG4gICAgLy9pbnNlcnQgaW1nIGluIGFib3V0IGRpdlxuICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWZzSW1nKTtcbiAgICAvL2NyZWF0ZSBoMiB3aXRoIGRlc2MgZXhwbGFpbmluZyBpbmZvIGFib3V0IHRoZSByZXN0cnVhbnQgYW5kIHRoZSBjaGVmXG4gICAgY29uc3QgY2hlZkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjaGVmQWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2NoZWYtYWJvdXQnKTtcbiAgICBjaGVmQWJvdXQudGV4dENvbnRlbnQgPSAnQ2hlZiBDYXJkZW5hcyBzdGFydGVkIGhpcyBraXRjaGVuIGluIDE5OTkgYWZ0ZXIgcmVhbGl6aW5nIHRoYXQgaGUgd291bGQgYWx3YXlzIHdhbnQgdG8gaGF2ZSBoaXMgbW90aGVyIGNvb2tpbmcuIEhlIHRvb2sgaXQgdXBvbiBoaW1zZWxmIHRvIGFyY2hpdmUgYWxsIHRoZSBmYW1pbHkgcmVjaXBlcy4gQWZ0ZXIgeWVhcnMgb2YgcGVyZmVjdGluZyBoaXMgY3JhZnQgaGUgaXMgZmluYWxseSBhYmxlIHRvIGJyaW5nIHRoZSBob21lIHN0eWxlIGNvb2tpbmcgaGUgZ3JldyB1cCBsb3ZpbmcgdG8gdGhlIHBlb3BsZSBvZiB0aGlzIHdvcmxkLidcbiAgICAvL2luc2VydCBoMiB0byBhYm91dCBkaXYuXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZkFib3V0KTtcbn1cblxuZXhwb3J0IHthYm91dH0iLCJcblxuY29uc3QgYm9keSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vZWxlbWVudHNcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb250ZW50RGl2LmFwcGVuZChib2R5KTtcbiAgICBcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgbWFpbkJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgaGVsbG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlbGxvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdoZWxsbycpO1xuICAgICAgaGVsbG9EaXYuaW5uZXJIVE1MID0gXCLwn4yuIPCfjK/wn4y277iPXCIgKyAnPC9icj4nICtcIk1leGljYW4gQ3Vpc2luZSBieSBDaGVmIENhcmRlbmFzLlwiOyBcbiAgICBcbiAgICAvL3NlbGVjdGVkIGVsZW1lbnRzXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKGhlbGxvRGl2KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IHsgYm9keSB9XG4iLCJjb25zdCBmb290ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgZm9vdGVyIH07IiwiaW1wb3J0IHRhY29zIGZyb20gJy4vdGFjb3MuanBlZyc7XG5pbXBvcnQgcXVlc2FkaWxsYSBmcm9tICcuL3F1ZXNhZGlsbGEuanBlZyc7XG5pbXBvcnQgZmx1YXRhcyBmcm9tICcuL2ZsdWF0YXMuanBlZyc7XG5pbXBvcnQgZW1wYW5hZGEgZnJvbSAnLi9lbXBhbmFkYXMuanBlZyc7XG5cbmNvbnN0IG1lbnUgPSBmdW5jdGlvbigpe1xubGV0IG1lbnUgPSBbJ3RhY29zJywncXVlc2FkaWxsYScsJ2ZsdWF0YXMnLCdlbXBhbmFkYXMnXTtcbmxldCBtZW51SW1ncyA9IFt0YWNvcyxxdWVzYWRpbGxhLGZsdWF0YXMsZW1wYW5hZGFdO1xuLy8gY3JlYXRlIDQgZGl2c1xuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FyZC1jb250YWluZXInKTtcbi8vaW5zZXJ0cyB0aGUgY2FyZCBjb250YWluZXIgYmVmb3JlIHRoZSBmb290ZXIuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbmNvbnRlbnQuaW5zZXJ0QmVmb3JlKGNhcmRDb250YWluZXIsIGZvb3Rlcik7XG5cbi8vY3JlYXRlcyA0IGRpdnMgd2l0aCBpZCdzIG9mIHRoZSBtZW51IGl0ZW1zO1xuLy8gaW5zZXJ0IGltYWdlcyBpbiBlYWNoIGRpdlxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG1lbnVbaV07XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IG1lbnVJbWdzW2ldO1xuICAgIGNvbnN0IGltZ1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLGVsZW1lbnQgKyAnLWNhcmQnKTtcbiAgICBpbWdDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWNhcmQnKTtcbiAgICBpbWdUYWcuc2V0QXR0cmlidXRlKCdpZCcsZWxlbWVudCk7XG4gICAgaW1nVGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWltZycpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4gICAgaW1nQ2FyZC5hcHBlbmRDaGlsZChpbWdUYWcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLnNyYyA9IGltZ0VsZW1lbnQ7XG59XG4vLyBhZGQgZGVzY3JpcHRpb24gaW4gZWFjaCBkaXYgZXhwbGFpbmluZyB0aGUgbWVudSBpdGVtXG5jb25zdCB0YWNvc0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFjb3MtY2FyZCcpO1xuY29uc3QgcXVlc2FkaWxsYUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc2FkaWxsYS1jYXJkJyk7XG5jb25zdCBmbHVhdGFzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbHVhdGFzLWNhcmQnKTtcbmNvbnN0IGVtcGFuYWRhQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbXBhbmFkYXMtY2FyZCcpO1xuXG5sZXQgbWVudUNhcmRTZWxlY3RvcnMgPSBbdGFjb3NDYXJkLCBxdWVzYWRpbGxhQ2FyZCwgZmx1YXRhc0NhcmQsIGVtcGFuYWRhQ2FyZF07XG4vLyBhZGQgbWVudSBkZXNjciB0byBlYWNoIG1lbnUgY2FyZCAvXG4vLyBhZGQgaWQgdG8gZWFjaCBtZW51IGRlc2MgL1xuLy8gc2VsZWN0IGlkIGFuZCBjaGFuZ2UgdGV4dCBjb250ZW50XG5mb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBtZW51W2ldICsgJy1kZXNjJyk7XG4gICAgbWVudURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWRlc2NyaXB0aW9uJyk7XG4gICAgbWVudUNhcmRTZWxlY3RvcnNbaV0uYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnc2Vjb25kIGxvb3AgaXMgcnVubmluZycgKyBpKTtcbn1cblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFjb3MtZGVzYycpLnRleHRDb250ZW50ID0gJ0Nhcm5lIGFzYWRhIHRhY29zJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzYWRpbGxhLWRlc2MnKS50ZXh0Q29udGVudCA9ICdDaGlja2VuIHF1ZXNhZGlsbGFzJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbHVhdGFzLWRlc2MnKS50ZXh0Q29udGVudCA9ICdjaGlja2VuIGZsdWF0dXMgd2l0aCBiZWFucyBhbmQgcmljZSc7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1wYW5hZGFzLWRlc2MnKS50ZXh0Q29udGVudCA9ICdTdGVhayBlbXBhbmFkYXMgdG9wcGVkIHd0aWggYmVhbnMgYW5kIGxldHR1Y2UuJztcblxuXG59XG5cbmV4cG9ydCB7bWVudX0iLCJjb25zdCBuYXYgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBsaW5rc0FycmF5ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJBYm91dFwiLCBcIkNvbnRhY3RcIl07XG5cdC8vY3JlYXRlZCBlbGVtZW50c1xuICAgIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGlua3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2xpbmtzLWNvbnRhaW5lcicpOyAgXG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdCAgICBuYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYmFyXCIpO1xuXHRjb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgc2l0ZU5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXRlLW5hbWVcIik7XG4gICAgICAgIHNpdGVOYW1lLnRleHRDb250ZW50ID0gXCJDb2NpbmEgQ2FyZGVuYXNcIjtcblx0XG4gICAgIC8vZG9tIGVsZW1lbnRzXG5cdGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdCAgICBjb250ZW50RGl2LmFwcGVuZChuYXYpOyBcblxuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1iYXJcIik7XG4gICAgICAgIG5hdkJhci5hcHBlbmQoc2l0ZU5hbWUpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kKGxpbmtzQ29udGFpbmVyKVxuXG5cblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmtzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsaW5rc0FycmF5W2luZGV4XTtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG5cdFx0XG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdCAgICBsaW5rcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1saW5rc1wiKTtcbiAgICAgICAgICAgIGxpbmtzLnNldEF0dHJpYnV0ZSgnaWQnLGVsZW1lbnQpO1xuICAgICAgICAgICAgbGlua3MudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuXG4gICAgIFx0XG4gICAgICAgIGxpbmtzQ29udGFpbmVyLmFwcGVuZChsaW5rcylcblxuXHR9XG5cbiAgICAvL3NldCBidXR0b24gYWN0aW9uc1xuICAgIFxuICAgIC8vaG9tZSBidXR0b25cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJylcblxuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWVudScpXG4gICAgbGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0JylcbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb250YWN0Jylcbn07XG5cbmV4cG9ydCB7IG5hdiB9O1xuIiwiaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9uYXYnO1xuaW1wb3J0IHsgYm9keSB9IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5cbmNvbnN0IHBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgbmF2KCk7XG4gICAgYm9keSgpO1xuICAgIGZvb3RlcigpO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZCB9OyIsImltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XG5pbXBvcnQge21lbnV9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7Y29udGFjdH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7YWJvdXR9IGZyb20gJy4vYWJvdXQnO1xuXG5jb25zdCB0YWJOYXZpZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgLy9DbGVhcnMgdGhlIG5leHQgc2liaWxpbmcgb2YgbmF2YmFyIGFuZCBpbnNlcnRzIGdpdmVuIGNvbnRlbnQgd2l0aCBmdW5jdGlvbi5cbiAgICBmdW5jdGlvbiBjbGVhck1haW4odGFiKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1iYXJcIik7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKG5hdkJhci5uZXh0U2libGluZyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpO1xuXG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGZvb3RlciwgdGFiKCkpO1xuICAgIH1cbiAgICAvL0V2ZW50IGxpc3RlbmVycyBmb3IgbmF2IGxpbmtzIHRvIHJlbW92ZSBwYWdlTG9hZCBhbmQgbG9hZCBkaWZmZXJlbnQgZnVuY3Rpb25zIGpzXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xuXG5mb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbmF2TGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG5cdG5hdkxpbmtzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGxldCBsaW5rSWQgPSBuYXZMaW5rc1tpbmRleF0uYXR0cmlidXRlc1sxXS52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIFwiICsgbGlua0lkKTtcblx0XHQvL3dpbGwgcnVuIGZ1bmN0aW9uIHRvIGRpc3BsYXkgZGlmZmVyZW50IHRhYnNcblx0XHRpZiAobGlua0lkID09IFwiSG9tZVwiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInRydWUsIHRoaXMgaXMgaG9tZVwiKTtcbiAgICAgICAgICAgIGNsZWFyTWFpbihib2R5KTtcbiAgICAgICAgICAgIFxuXHRcdH0gZWxzZSBpZiAobGlua0lkID09IFwiTWVudVwiKSB7XG4gICAgICAgICAgICBjbGVhck1haW4obWVudSk7XG5cdFx0XHRcblx0XHR9IGVsc2UgaWYgKGxpbmtJZCA9PSBcIkFib3V0XCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwidHJ1ZSwgdGhpcyBpcyB0aGUgYWJvdXRcIik7XG5cdFx0XHRjbGVhck1haW4oYWJvdXQpO1xuXHRcdH0gZWxzZSBpZiAobGlua0lkID09IFwiQ29udGFjdFwiKSB7XG5cdFx0XHRjbGVhck1haW4oY29udGFjdCk7XG5cdFx0XHRjb25zb2xlLmxvZyhcInRydWUsIHRoaXMgaXMgdGhlIGNvbnRhY3RcIik7XG5cdFx0fVxuXHR9KTtcbn1cbn1cblxuZXhwb3J0IHt0YWJOYXZpZ2F0aW9ufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSBcIi4vcGFnZS1sb2FkXCI7XG5pbXBvcnQgeyB0YWJOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vdGFiTmF2aWdhdGlvblwiO1xuXG5wYWdlTG9hZCgpO1xudGFiTmF2aWdhdGlvbigpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=