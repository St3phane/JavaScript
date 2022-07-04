function verif_formulaire()
{
 if(document.formulaire.nom.value == "")  {
   alert("Veuillez entrer votre nom!");
   document.formulaire.nom.focus();
   return false;
  }
  if(document.formulaire.prenom.value == "")  {
    alert("Veuillez entrer votre prenom!");
    document.formulaire.prenom.focus();
    return false;
  }
  if(document.formulaire.sexe.value == "") {
    alert("Veuillez choisir votre sexe!");
    document.formulaire.sexe.focus();
    return false;
   }
 if(document.formulaire.ddn.value == "") {
   alert("Veuillez entrer votre date de naissance!");
   document.formulaire.ddn.focus();
   return false;
  }
 if(document.formulaire.codepostal.value == "") {
   alert("Veuillez entrer votre code postal!");
   document.formulaire.codepostal.focus();
   return false;
  }
 if(document.formulaire.email.value.indexOf('@') == -1) {
   alert("Saisir une adresse mail valide!");
   document.formulaire.email.focus();
   return false;
  }
 if(document.formulaire.sujet.value == "") {
   alert("Veuillez selectionné un sujet!");
   document.formulaire.sujet.focus();
   return false;
  }
  if(document.formulaire.commentaire.value == "") {
    alert("Veuillez completer votre demande");
    document.formulaire.commentaire.focus();
    return false;
   }
}
//-->