/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



const tabNavigation = function () {
    //Event listeners for nav links to remove pageLoad and load different functions js
const navLinks = document.querySelectorAll(".nav-links");

for (let index = 0; index < navLinks.length; index++) {
	navLinks[index].addEventListener("click", function () {
		let linkId = navLinks[index].attributes[1].value;
		console.log("you clicked " + linkId);
		//will run function to display different tabs
		if (linkId == "Home") {
			console.log("true, this is home");

			const mainBody = document.getElementById("main-body");

			let content = document.querySelector("#content");
			content.removeChild(mainBody);

			const footer = document.querySelector("#footer");

			content.insertBefore(footer, (0,_body__WEBPACK_IMPORTED_MODULE_0__.body)());
            
		} else if (linkId == "Menu") {
			console.log("true, this is the menu");
		} else if (linkId == "About") {
			console.log("true, this is the about");
		} else if (linkId == "Contact") {
			console.log("true, this is the contact");
		}
	});
}
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTs7Ozs7Ozs7Ozs7Ozs7O0FDaENmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NhO0FBQ0U7QUFDSTs7QUFFbEM7QUFDQSxJQUFJLHlDQUFHO0FBQ1AsSUFBSSwyQ0FBSTtBQUNSLElBQUksK0NBQU07QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSOEI7OztBQUc5QjtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsMkNBQUk7QUFDcEM7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ051QztBQUNTOztBQUVoRCxvREFBUTtBQUNSLDZEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ib2R5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvdGFiTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgYm9keSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vZWxlbWVudHNcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb250ZW50RGl2LmFwcGVuZChib2R5KTtcbiAgICBcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWJvZHknKTtcbiAgICBcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgbWFpbkJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgaGVsbG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhlbGxvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdoZWxsbycpO1xuICAgICAgaGVsbG9EaXYuaW5uZXJIVE1MID0gXCLwn4yuIPCfjK/wn4y277iPXCIgKyAnPC9icj4nICtcIk1leGljYW4gQ3Vpc2luZSBieSBDaGVmIENhcmRlbmFzLlwiOyBcbiAgICBcbiAgICAvL3NlbGVjdGVkIGVsZW1lbnRzXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKGhlbGxvRGl2KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbn1cblxuZXhwb3J0IHsgYm9keSB9XG4iLCJjb25zdCBmb290ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29udGVudERpdi5hcHBlbmQoZm9vdGVyKTtcbn1cblxuZXhwb3J0IHsgZm9vdGVyIH07IiwiY29uc3QgbmF2ID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgbGlua3NBcnJheSA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQWJvdXRcIiwgXCJDb250YWN0XCJdO1xuXHQvL2NyZWF0ZWQgZWxlbWVudHNcbiAgICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGxpbmtzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdsaW5rcy1jb250YWluZXInKTsgIFxuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHQgICAgbmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2LWJhclwiKTtcblx0Y29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHNpdGVOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2l0ZS1uYW1lXCIpO1xuICAgICAgICBzaXRlTmFtZS50ZXh0Q29udGVudCA9IFwiQ29jaW5hIENhcmRlbmFzXCI7XG5cdFxuICAgICAvL2RvbSBlbGVtZW50c1xuXHRjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHQgICAgY29udGVudERpdi5hcHBlbmQobmF2KTsgXG5cbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYmFyXCIpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kKHNpdGVOYW1lKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZChsaW5rc0NvbnRhaW5lcilcblxuXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5rc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gbGlua3NBcnJheVtpbmRleF07XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuXHRcdFxuICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHQgICAgbGlua3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtbGlua3NcIik7XG4gICAgICAgICAgICBsaW5rcy5zZXRBdHRyaWJ1dGUoJ2lkJyxlbGVtZW50KTtcbiAgICAgICAgICAgIGxpbmtzLnRleHRDb250ZW50ID0gZWxlbWVudDtcblxuICAgICBcdFxuICAgICAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmQobGlua3MpXG5cblx0fVxuXG4gICAgLy9zZXQgYnV0dG9uIGFjdGlvbnNcbiAgICBcbiAgICAvL2hvbWUgYnV0dG9uXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSG9tZScpXG5cblxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01lbnUnKVxuICAgIGxldCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBYm91dCcpXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ29udGFjdCcpXG59O1xuXG5leHBvcnQgeyBuYXYgfTtcbiIsImltcG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2JztcbmltcG9ydCB7IGJvZHkgfSBmcm9tICcuL2JvZHknO1xuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuXG5jb25zdCBwYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIG5hdigpO1xuICAgIGJvZHkoKTtcbiAgICBmb290ZXIoKTtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWQgfTsiLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4vYm9keVwiO1xuXG5cbmNvbnN0IHRhYk5hdmlnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9FdmVudCBsaXN0ZW5lcnMgZm9yIG5hdiBsaW5rcyB0byByZW1vdmUgcGFnZUxvYWQgYW5kIGxvYWQgZGlmZmVyZW50IGZ1bmN0aW9ucyBqc1xuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rc1wiKTtcblxuZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5hdkxpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRuYXZMaW5rc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgbGlua0lkID0gbmF2TGlua3NbaW5kZXhdLmF0dHJpYnV0ZXNbMV0udmFsdWU7XG5cdFx0Y29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBcIiArIGxpbmtJZCk7XG5cdFx0Ly93aWxsIHJ1biBmdW5jdGlvbiB0byBkaXNwbGF5IGRpZmZlcmVudCB0YWJzXG5cdFx0aWYgKGxpbmtJZCA9PSBcIkhvbWVcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cnVlLCB0aGlzIGlzIGhvbWVcIik7XG5cblx0XHRcdGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWJvZHlcIik7XG5cblx0XHRcdGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXHRcdFx0Y29udGVudC5yZW1vdmVDaGlsZChtYWluQm9keSk7XG5cblx0XHRcdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpO1xuXG5cdFx0XHRjb250ZW50Lmluc2VydEJlZm9yZShmb290ZXIsIGJvZHkoKSk7XG4gICAgICAgICAgICBcblx0XHR9IGVsc2UgaWYgKGxpbmtJZCA9PSBcIk1lbnVcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cnVlLCB0aGlzIGlzIHRoZSBtZW51XCIpO1xuXHRcdH0gZWxzZSBpZiAobGlua0lkID09IFwiQWJvdXRcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cnVlLCB0aGlzIGlzIHRoZSBhYm91dFwiKTtcblx0XHR9IGVsc2UgaWYgKGxpbmtJZCA9PSBcIkNvbnRhY3RcIikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0cnVlLCB0aGlzIGlzIHRoZSBjb250YWN0XCIpO1xuXHRcdH1cblx0fSk7XG59XG59XG5cbmV4cG9ydCB7dGFiTmF2aWdhdGlvbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gXCIuL3BhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgdGFiTmF2aWdhdGlvbiB9IGZyb20gXCIuL3RhYk5hdmlnYXRpb25cIjtcblxucGFnZUxvYWQoKTtcbnRhYk5hdmlnYXRpb24oKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9