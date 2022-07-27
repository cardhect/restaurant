import { body } from "./body";
import {menu} from "./menu";
import {contact} from './contact';
import {about} from './about';

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
            clearMain(body);
            
		} else if (linkId == "Menu") {
            clearMain(menu);
			
		} else if (linkId == "About") {
			console.log("true, this is the about");
		} else if (linkId == "Contact") {
			console.log("true, this is the contact");
		}
	});
}
}

export {tabNavigation};