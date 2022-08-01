const contact = function() {
//create contact container
const contactContainer = document.createElement('div');
contactContainer.setAttribute('id','contact-container');
//insert before footer
const content = document.getElementById('content');
const footer = document.getElementById('footer');
content.insertBefore(contactContainer, footer);
//create contact form
const contact = document.createElement('div');
contact.setAttribute('id','contact-div');

const h1 = document.createElement('h1');
h1.setAttribute('id','contact-info');
h1.innerHTML = "(000)-123-4567 "+ "<br></br>" + "395 Rue de la Couronne, Quebec CA"
contact.appendChild(h1);
//insert form into container
contactContainer.appendChild(contact);

}
export {contact};