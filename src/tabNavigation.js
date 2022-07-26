import { body } from "./body";


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

			content.insertBefore(footer, body());
            
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

export {tabNavigation};