const body = function() {
    const body = document.createElement('div')
    body.setAttribute('id','main-body');
    
    const contentDiv = document.getElementById('content');

    contentDiv.append(body);
}

export { body }
