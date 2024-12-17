// Afficher un message de bienvenue
window.onload = function() {
    alert("Bienvenue sur mon portfolio !");
};

const btnMain = document.querySelector('.btn-main');
btnMain.addEventListener('click', function() {
    this.style.backgroundColor = '#421723';
    this.style.color = '#ffffff';
    alert("Merci de visiter ma page !");
});
