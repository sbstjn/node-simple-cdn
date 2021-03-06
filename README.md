This is a simple NodeJS script for ballancing static file requests over multiple hosts. This is useful if you want to use CDN (Content Delivery Network) within your application. See the `examples` folder for two example scripts.

    var sCDN = require('path/to/simple-cdn/libs/');

    sCDN.addHost('http://s1.hazelco.de');
    sCDN.addHost('http://s2.hazelco.de');
    sCDN.addHost('http://s3.hazelco.de');

    // or use this
    sCDN.addHost('http://s1.hazelco.de').addHost('http://s2.hazelco.de').addHost('http://s3.hazelco.de');
    
    // or use this
    sCDN.addHosts(['http://s1.hazelco.de', 'http://s2.hazelco.de', 'http://s3.hazelco.de']);
    
    // shorter function for static files
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
    
    /**
     * http://s1.hazelco.de/style.css
     * http://s1.hazelco.de/style.css
     * http://s2.hazelco.de/default.css
     * http://s3.hazelco.de/print.css
     * http://s2.hazelco.de/default.css
     * http://s1.hazelco.de/spinner.gif
     * http://s2.hazelco.de/logo.png
     * http://s3.hazelco.de/default.js
     * http://s1.hazelco.de/spinner.gif
     * http://s1.hazelco.de/spinner.gif
     * http://s1.hazelco.de/spinner.gif
     * http://s1.hazelco.de/spinner.gif
     * http://s2.hazelco.de/default.css
     */
