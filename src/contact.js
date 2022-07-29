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
export {contact};