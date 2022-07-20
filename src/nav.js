const nav = function () {
	let linksArray = ["Home", "Menu", "About", "Contact"];
	//created elements
    const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('id','button-container');  
	const nav = document.createElement("div");
	    nav.setAttribute("id", "nav-bar");
	const siteName = document.createElement("h1");
        siteName.setAttribute("id", "site-name");
        siteName.textContent = "Cocina-Cardenas";
	
     //dom elements
	const contentDiv = document.getElementById("content");
	    contentDiv.append(nav); 

        const navBar = document.getElementById("nav-bar");
        navBar.append(siteName);
        navBar.append(buttonContainer)


	for (let index = 0; index < linksArray.length; index++) {
        const element = linksArray[index];
		
        const links = document.createElement("button");
		    links.setAttribute("class", "nav-links");
            links.textContent = element;
		
        buttonContainer.append(links)
		console.log(element);
	}
};

export { nav };
