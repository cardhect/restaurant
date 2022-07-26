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

export { nav };
