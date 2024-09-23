function loadHTML(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

function loadCSS(url) {
    var linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href = url;
    document.head.appendChild(linkTag);
}

function loadScript(url) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    document.body.appendChild(scriptTag);
}
document.getElementById('btn-doc-quyen').addEventListener('click', function () {
    loadHTML('non.html');   
    loadScript('non.js');   
    loadCSS('non.css');     
});

document.getElementById('btn-khong-doc-quyen').addEventListener('click', function () {
    loadHTML('pre.html'); 
    loadScript('pre.js');
    loadCSS('pre.css'); 
});

