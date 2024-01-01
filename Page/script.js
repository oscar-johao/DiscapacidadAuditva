function abrirOverlay() {
    var overlay = document.getElementById('donar');
    overlay.style.display = 'block';
}
window.addEventListener('click', function(event) {
    var overlay = document.getElementById('donar');
    if (event.target === overlay) {
    overlay.style.display = 'none';
    }
});
/*
function cerrarOverlay() {
    var overlay = document.getElementById('donar');
    overlay.style.display = 'none';
}*/

function fuentesOverlay() {
    var overlay = document.getElementById('fuentes');
    overlay.style.display = 'block';
}
window.addEventListener('click', function(event) {
    var overlay = document.getElementById('fuentes');
    if (event.target === overlay) {
    overlay.style.display = 'none';
    }
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});