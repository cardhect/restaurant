const nav = function() {
    const nav = document.createElement('div');
    nav.setAttribute('id','nav-bar');

    const contentDiv = document.getElementById('content');

    contentDiv.append(nav);
}

export { nav }