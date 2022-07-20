const footer = function() {
    const footer = document.createElement('div');
    footer.setAttribute('id','footer');
    const contentDiv = document.getElementById('content');

    contentDiv.append(footer);
}

export { footer };