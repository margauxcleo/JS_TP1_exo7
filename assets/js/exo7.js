// exercice 7 
let tab = new Array();

function getName(){
    var name = document.getElementById('firstName').value;
    // incrémentation de la donnée dans le tableau
    tab.push(name);
    //affiche le tableau dans la console au fur et à mesure pour vérif
    console.log(tab);
}

function getWinner(){
    //on vérifie que des noms aient été renseignés
    if(tab.length > 0){
        let intervalle = tab.length;
        let winnerIndex = Math.floor(Math.random() * intervalle);
        // verif
        console.log(winnerIndex);
        // affichage du gagnant
        document.writeln('Le gagnant est: ' + tab[winnerIndex]);
    } else {
        document.writeln('Veuillez indiquer des noms.');
    }
    
}




