let saisi = document.getElementById('saisi');
let saisilongeur = saisi.getAttribute('maxlength');
let compteur = document.getElementById('compteur');

saisi.addEventListener('keyup', function(){
    let moyencomp = saisilongeur - saisi.value.length;
    compteur.innerText = moyencomp;
});