//code permettant le lancer de des //

function lancerDe() {
    // Lance un dé de 20 faces (résultat entre 1 et 20)
    let resultat = Math.floor(Math.random() * 20) + 1;
    console.log("Résultat du lancer : " + resultat);
    // Affiche le résultat du lancer dans l'élément avec l'id "resultat-de"
    document.getElementById("resultat-de").textContent = "Résultat du lancer : " + resultat;
    // Cache toutes les possibilités
    document.getElementById("choix-simple-1").style.display = "none";
    document.getElementById("choix-simple-2").style.display = "none";
    document.getElementById("choix-simple-3").style.display = "none";
    // Affiche la possibilité correspondante selon le résultat
    if (resultat <= 7) {
        document.getElementById("choix-simple-1").style.display = "block";
    } else if (resultat <= 14) {
        document.getElementById("choix-simple-2").style.display = "block";
    } else {
        document.getElementById("choix-simple-3").style.display = "block";
    }
}
function cacherBouton() {
    // Sélectionne le bouton par son id et change son style pour le cacher
    document.getElementById("lancerBouton").style.display = "none";
}
//Galerie d'images JS //
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
