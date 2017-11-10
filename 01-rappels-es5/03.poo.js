function Personne(nom, prenom, pseudo,age) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.age = age;
  this.getNomComplet = function() {

    return this.nom+" "+this.prenom+" "+this.pseudo;
  }

  this.getInitiales = function() {
    return this.nom.charAt(0) + " "+this.prenom.charAt(0);
  }
}

var jules = new Personne("Jules","LEMAIRE","jules77","30");

var paul = new Personne("Paul", "LEMAIRE","paul44");

jules.pseudo = "jules44";


console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.age);
console.log(jules.getNomComplet());
console.log(jules.getInitiales());

console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());

var robert = {prenom:'Robert',nom:'LEPREFET',pseudo:'robert77',getNomComplet:function() {
  robert.prenom+" "+robert.nom+" "+robert.pseudo;
}}

console.log(robert.nom);
console.log(robert.prenom);
console.log(robert.pseudo);
console.log(robert.getNomComplet());
