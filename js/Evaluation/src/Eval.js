var j=0;
var a=0;
var v=0;
var personnes;
do {
  personnes = window.prompt("Entrez votre age");
  if ( personnes <20) {
    j++;
    console.log(personnes);
  }
  else if ((personnes >=20 ) && (personnes <=40)) {
    v++;
    console.log(v);
  }
}
while (personnes < 100);
 
window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");



//eval 02//

var nombre = prompt("Entrer un chiffre");
for (i = 1; i <= 10; i++) {
document.write(i+ " x " +nombre+ " = "+i*nombre+"<br>");
}

//eval 03//

var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	document.write(tab)
}
else{alert("erreur")}

//eval 04//


