function Personne(nom, prenom, pseudo) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.getNomComplet = function() {

    return this.nom+" "+this.prenom+" "+this.pseudo;
  }
}

var jules = new Personne("Jules","LEMAIRE","jules77");

var paul = new Personne("Paul", "LEMAIRE","paul44");


console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());
