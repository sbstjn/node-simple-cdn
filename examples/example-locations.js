var sCDN = require('../libs/');

sCDN.addLocation('DE', ['http://s1.de.hazelco.de', 'http://s2.de.hazelco.de', 'http://s3.de.hazeco.de']);
sCDN.addLocation('US', ['http://s1.us.hazelco.de', 'http://s2.us.hazelco.de', 'http://s3.us.hazelco.de']);

var _sf = sCDN.o;

sCDN.setLocation('US');

console.log(_sf('style.css'));
console.log(_sf('style.css'));
console.log(_sf('default.css'));
console.log(_sf('print.css'));
console.log(_sf('default.css'));
console.log(_sf('spinner.gif'));
console.log(_sf('logo.png'));
console.log(_sf('default.js'));
console.log(_sf('spinner.gif'));
console.log(_sf('spinner.gif'));
console.log(_sf('spinner.gif'));
console.log(_sf('spinner.gif'));
console.log(_sf('default.css'));