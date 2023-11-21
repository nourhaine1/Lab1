var path=require('path');
var util = require('util');
var v8= require('v8');
//afficher le nom de fichier courant + util.log et path.basename
console.log("affichage de nom du fichier !!!!!!!!!!");
util.log(path.basename(__filename));
//creer un chemain avec path.join +l'afficher
var dirUpoloads=path.join(__dirname,'www','files','uploads');
console.log("affichage de chemain du fichier !!!!!!!!!!");

util.log(dirUpoloads);
//afficher les statistics de l'uitlisation de la memoire avec v8
console.log("affichage des statistiques !!!!!!!!!!");

util.log(v8.getHeapStatistics());
