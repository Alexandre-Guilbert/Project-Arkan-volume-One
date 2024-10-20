//code permettant le lancer de des //

function lancerDe() {
    // Lance un dé de 20 faces (résultat entre 1 et 20)
    let resultat = Math.floor(Math.random() * 20) + 1;
    // Affiche le résultat du lancer dans l'élément avec l'id "resultat-de"
    document.getElementById("resultat-de").textContent = "Résultat du lancer : " + resultat;
    // Cache toutes les possibilités
    document.getElementById("choix-simple-4").style.display = "none";
    document.getElementById("choix-simple-5").style.display = "none";
    document.getElementById("choix-simple-6").style.display = "none";
    document.getElementById("choix-mal").style.display = "none";
    document.getElementById("choix-bon").style.display = "none";
    // Affiche la possibilité correspondante selon le résultat du chapitre 1
    if (resultat <= 7) {
        document.getElementById("choix-simple-4").style.display = "block";
        document.getElementById("choix-bon").style.display = "block";
    } else if (resultat <= 14) {
        document.getElementById("choix-simple-5").style.display = "block";
        document.getElementById("choix-mal").style.display = "block";
    } else {
        document.getElementById("choix-simple-6").style.display = "block";
        document.getElementById("choix-bon").style.display = "block";
    }

}
function cacherBouton() {
    // Sélectionne le bouton par son id et change son style pour le cacher
    document.getElementById("lancerBouton").style.display = "none";
}
//Galerie d'images JS //
const galleryItems = document.querySelectorAll('.gallery-item');
const captionText = document.getElementById('caption');

galleryItems.forEach(item => {
    item.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
