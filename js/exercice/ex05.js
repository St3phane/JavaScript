var nom = prompt("Entrez votre nom");
var prenom = prompt("Entrez votre prenom");
var reponse = confirm("Etes vous un homme?");
    if (reponse == true) {
    
        alert("Vous etes un homme");
    } 
    else {
        alert("Vous etes une femme");
    }

window.alert("vous etes " + nom + " " + prenom + " " + reponse); 