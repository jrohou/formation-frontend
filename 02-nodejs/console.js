const readline = require('readline');
var service = require('./service');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var menu={

  "1":{
    libelle:'Lister tous les présentateurs',
    execute:function() {
      console.log(service.listerLesPresentateurs);
    }
  },
  "2":{
    libelle:'Top des présentateurs',
    execute:function(){
      console.log(service.listerTopPresentateurs);
    }
  },
  "3":{
    libelle:'Liste des sessions',
    execute:function() {
      console.log(service.listerToutesLesSessions);
    }

  },
  "4":{
    libelle:"Détail d'une session",
    execute:function(){
      rl.question('Veuillez choisir un ID',(answer2) => {
        if(answer2 != null) {
          console.log(service.trouverUneSession(answer2));
        }
        else {
            console.log('Identifiant vide');
        }

    })
  }
}}

console.log('*** Application Conférence ***');
console.log('1. Liste de tous les présentateurs');
console.log('2. Top présentateurs');
console.log('3. Liste des sessions');
console.log("4. Détail d'une session");

rl.question('Veuillez choisir un chiffre ', (answer) => {
  menu[answer].execute();
});
