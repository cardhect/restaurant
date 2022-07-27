/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {



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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_3__);





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
		} else if (linkId == "Contact") {
			console.log("true, this is the contact");
		}
	});
}
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b2R5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3RhYk5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgYm9keSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vZWxlbWVudHNcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb250ZW50RGl2LmFwcGVuZChib2R5KTtcbiAgICBcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgbWFpbkJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgaGVsbG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlbGxvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdoZWxsbycpO1xuICAgICAgaGVsbG9EaXYuaW5uZXJIVE1MID0gXCLwn4yuIPCfjK/wn4y277iPXCIgKyAnPC9icj4nICtcIk1leGljYW4gQ3Vpc2luZSBieSBDaGVmIENhcmRlbmFzLlwiOyBcbiAgICBcbiAgICAvL3NlbGVjdGVkIGVsZW1lbnRzXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKGhlbGxvRGl2KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IHsgYm9keSB9XG4iLCJjb25zdCBmb290ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgZm9vdGVyIH07IiwiaW1wb3J0IHRhY29zIGZyb20gJy4vdGFjb3MuanBlZyc7XG5pbXBvcnQgcXVlc2FkaWxsYSBmcm9tICcuL3F1ZXNhZGlsbGEuanBlZyc7XG5pbXBvcnQgZmx1YXRhcyBmcm9tICcuL2ZsdWF0YXMuanBlZyc7XG5pbXBvcnQgZW1wYW5hZGEgZnJvbSAnLi9lbXBhbmFkYXMuanBlZyc7XG5cbmNvbnN0IG1lbnUgPSBmdW5jdGlvbigpe1xubGV0IG1lbnUgPSBbJ3RhY29zJywncXVlc2FkaWxsYScsJ2ZsdWF0YXMnLCdlbXBhbmFkYXMnXTtcbmxldCBtZW51SW1ncyA9IFt0YWNvcyxxdWVzYWRpbGxhLGZsdWF0YXMsZW1wYW5hZGFdO1xuLy8gY3JlYXRlIDQgZGl2c1xuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FyZC1jb250YWluZXInKTtcbi8vaW5zZXJ0cyB0aGUgY2FyZCBjb250YWluZXIgYmVmb3JlIHRoZSBmb290ZXIuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbmNvbnRlbnQuaW5zZXJ0QmVmb3JlKGNhcmRDb250YWluZXIsIGZvb3Rlcik7XG5cbi8vY3JlYXRlcyA0IGRpdnMgd2l0aCBpZCdzIG9mIHRoZSBtZW51IGl0ZW1zO1xuLy8gaW5zZXJ0IGltYWdlcyBpbiBlYWNoIGRpdlxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG1lbnVbaV07XG4gICAgY29uc3QgaW1nRWxlbWVudCA9IG1lbnVJbWdzW2ldO1xuICAgIGNvbnN0IGltZ1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLGVsZW1lbnQgKyAnLWNhcmQnKTtcbiAgICBpbWdDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWNhcmQnKTtcbiAgICBpbWdUYWcuc2V0QXR0cmlidXRlKCdpZCcsZWxlbWVudCk7XG4gICAgaW1nVGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWltZycpO1xuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ2FyZCk7XG4gICAgaW1nQ2FyZC5hcHBlbmRDaGlsZChpbWdUYWcpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLnNyYyA9IGltZ0VsZW1lbnQ7XG59XG4vLyBhZGQgZGVzY3JpcHRpb24gaW4gZWFjaCBkaXYgZXhwbGFpbmluZyB0aGUgbWVudSBpdGVtXG5jb25zdCB0YWNvc0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFjb3MtY2FyZCcpO1xuY29uc3QgcXVlc2FkaWxsYUNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc2FkaWxsYS1jYXJkJyk7XG5jb25zdCBmbHVhdGFzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbHVhdGFzLWNhcmQnKTtcbmNvbnN0IGVtcGFuYWRhQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbXBhbmFkYXMtY2FyZCcpO1xuXG5sZXQgbWVudUNhcmRTZWxlY3RvcnMgPSBbdGFjb3NDYXJkLCBxdWVzYWRpbGxhQ2FyZCwgZmx1YXRhc0NhcmQsIGVtcGFuYWRhQ2FyZF07XG4vLyBhZGQgbWVudSBkZXNjciB0byBlYWNoIG1lbnUgY2FyZCAvXG4vLyBhZGQgaWQgdG8gZWFjaCBtZW51IGRlc2MgL1xuLy8gc2VsZWN0IGlkIGFuZCBjaGFuZ2UgdGV4dCBjb250ZW50XG5mb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBtZW51W2ldICsgJy1kZXNjJyk7XG4gICAgbWVudURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdtZW51LWRlc2NyaXB0aW9uJyk7XG4gICAgbWVudUNhcmRTZWxlY3RvcnNbaV0uYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZygnc2Vjb25kIGxvb3AgaXMgcnVubmluZycgKyBpKTtcbn1cblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFjb3MtZGVzYycpLnRleHRDb250ZW50ID0gJ0Nhcm5lIGFzYWRhIHRhY29zJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzYWRpbGxhLWRlc2MnKS50ZXh0Q29udGVudCA9ICdDaGlja2VuIHF1ZXNhZGlsbGFzJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbHVhdGFzLWRlc2MnKS50ZXh0Q29udGVudCA9ICdjaGlja2VuIGZsdWF0dXMgd2l0aCBiZWFucyBhbmQgcmljZSc7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1wYW5hZGFzLWRlc2MnKS50ZXh0Q29udGVudCA9ICdTdGVhayBlbXBhbmFkYXMgdG9wcGVkIHd0aWggYmVhbnMgYW5kIGxldHR1Y2UuJztcblxuXG59XG5cbmV4cG9ydCB7bWVudX0iLCJjb25zdCBuYXYgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBsaW5rc0FycmF5ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJBYm91dFwiLCBcIkNvbnRhY3RcIl07XG5cdC8vY3JlYXRlZCBlbGVtZW50c1xuICAgIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGlua3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2xpbmtzLWNvbnRhaW5lcicpOyAgXG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdCAgICBuYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtYmFyXCIpO1xuXHRjb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgc2l0ZU5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXRlLW5hbWVcIik7XG4gICAgICAgIHNpdGVOYW1lLnRleHRDb250ZW50ID0gXCJDb2NpbmEgQ2FyZGVuYXNcIjtcblx0XG4gICAgIC8vZG9tIGVsZW1lbnRzXG5cdGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdCAgICBjb250ZW50RGl2LmFwcGVuZChuYXYpOyBcblxuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1iYXJcIik7XG4gICAgICAgIG5hdkJhci5hcHBlbmQoc2l0ZU5hbWUpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kKGxpbmtzQ29udGFpbmVyKVxuXG5cblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpbmtzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsaW5rc0FycmF5W2luZGV4XTtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG5cdFx0XG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdCAgICBsaW5rcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1saW5rc1wiKTtcbiAgICAgICAgICAgIGxpbmtzLnNldEF0dHJpYnV0ZSgnaWQnLGVsZW1lbnQpO1xuICAgICAgICAgICAgbGlua3MudGV4dENvbnRlbnQgPSBlbGVtZW50O1xuXG4gICAgIFx0XG4gICAgICAgIGxpbmtzQ29udGFpbmVyLmFwcGVuZChsaW5rcylcblxuXHR9XG5cbiAgICAvL3NldCBidXR0b24gYWN0aW9uc1xuICAgIFxuICAgIC8vaG9tZSBidXR0b25cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJylcblxuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWVudScpXG4gICAgbGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Fib3V0JylcbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDb250YWN0Jylcbn07XG5cbmV4cG9ydCB7IG5hdiB9O1xuIiwiaW1wb3J0IHsgbmF2IH0gZnJvbSAnLi9uYXYnO1xuaW1wb3J0IHsgYm9keSB9IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5cbmNvbnN0IHBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgbmF2KCk7XG4gICAgYm9keSgpO1xuICAgIGZvb3RlcigpO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZCB9OyIsImltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XG5pbXBvcnQge21lbnV9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7Y29udGFjdH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7YWJvdXR9IGZyb20gJy4vYWJvdXQnO1xuXG5jb25zdCB0YWJOYXZpZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgLy9DbGVhcnMgdGhlIG5leHQgc2liaWxpbmcgb2YgbmF2YmFyIGFuZCBpbnNlcnRzIGdpdmVuIGNvbnRlbnQgd2l0aCBmdW5jdGlvbi5cbiAgICBmdW5jdGlvbiBjbGVhck1haW4odGFiKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1iYXJcIik7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKG5hdkJhci5uZXh0U2libGluZyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpO1xuXG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGZvb3RlciwgdGFiKCkpO1xuICAgIH1cbiAgICAvL0V2ZW50IGxpc3RlbmVycyBmb3IgbmF2IGxpbmtzIHRvIHJlbW92ZSBwYWdlTG9hZCBhbmQgbG9hZCBkaWZmZXJlbnQgZnVuY3Rpb25zIGpzXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtzXCIpO1xuXG5mb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbmF2TGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG5cdG5hdkxpbmtzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGxldCBsaW5rSWQgPSBuYXZMaW5rc1tpbmRleF0uYXR0cmlidXRlc1sxXS52YWx1ZTtcblx0XHRjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIFwiICsgbGlua0lkKTtcblx0XHQvL3dpbGwgcnVuIGZ1bmN0aW9uIHRvIGRpc3BsYXkgZGlmZmVyZW50IHRhYnNcblx0XHRpZiAobGlua0lkID09IFwiSG9tZVwiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInRydWUsIHRoaXMgaXMgaG9tZVwiKTtcbiAgICAgICAgICAgIGNsZWFyTWFpbihib2R5KTtcbiAgICAgICAgICAgIFxuXHRcdH0gZWxzZSBpZiAobGlua0lkID09IFwiTWVudVwiKSB7XG4gICAgICAgICAgICBjbGVhck1haW4obWVudSk7XG5cdFx0XHRcblx0XHR9IGVsc2UgaWYgKGxpbmtJZCA9PSBcIkFib3V0XCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwidHJ1ZSwgdGhpcyBpcyB0aGUgYWJvdXRcIik7XG5cdFx0fSBlbHNlIGlmIChsaW5rSWQgPT0gXCJDb250YWN0XCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwidHJ1ZSwgdGhpcyBpcyB0aGUgY29udGFjdFwiKTtcblx0XHR9XG5cdH0pO1xufVxufVxuXG5leHBvcnQge3RhYk5hdmlnYXRpb259OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlLWxvYWRcIjtcbmltcG9ydCB7IHRhYk5hdmlnYXRpb24gfSBmcm9tIFwiLi90YWJOYXZpZ2F0aW9uXCI7XG5cbnBhZ2VMb2FkKCk7XG50YWJOYXZpZ2F0aW9uKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==