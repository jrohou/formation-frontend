var villes = new Array('nantes','paris','saint-nazaire','angers','le mans');

function afficher(element, index, array) {
  console.log(element);
}

var lettreADansToutesLesVilles = villes.every (function (element, index, array) {
  return element.includes('a');
});

var auMoinsUneVilleAvecUnTiret = villes.some (function(element, index, array){
  return element.includes('-');
});

var villesSansTiretSansEspace =  villes.filter (function(element, index, array) {
  return !element.includes('-') && !element.includes(' ');

});

var villesMajusculeSeTerminantParS = villes.filter (function(element, index, array) {
  return element.endsWith('s')})
  .map(function(element,index, array) {
    return element.toUpperCase();
  });

villes.forEach(afficher);
console.log(lettreADansToutesLesVilles);
console.log(auMoinsUneVilleAvecUnTiret);
console.log(villesSansTiretSansEspace);
console.log(villesMajusculeSeTerminantParS);
