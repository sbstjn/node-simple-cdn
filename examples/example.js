var sCDN = require('../libs/');

sCDN.addHost('http://s1.hazelco.de');
sCDN.addHost('http://s2.hazelco.de');
sCDN.addHost('http://s3.hazelco.de');

sCDN.addHosts(['http://s1.hazelco.de', 'http://s2.hazelco.de', 'http://s3.hazelco.de']);

var _sf = sCDN.o;

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