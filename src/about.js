import chef from "./chef.jpg";
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
    chefsImg.src = chef;
    //insert img in about div
    aboutContainer.appendChild(chefsImg);
    //create h2 with desc explaining info about the restruant and the chef
    const chefAbout = document.createElement('h2');
    chefAbout.setAttribute('id','chef-about');
    chefAbout.textContent = 'Chef Cardenas started his kitchen in 1999 after realizing that he would always want to have his mother cooking. He took it upon himself to archive all the family recipes. After years of perfecting his craft he is finally able to bring the home style cooking he grew up loving to the people of this world.'
    //insert h2 to about div.
    aboutContainer.appendChild(chefAbout);
}

export {about}