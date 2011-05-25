(function(context, undefined) {
    context.hostList        = new Array();
    context.locationList    = new Object();
    context.locationDefault = null;
    context.location        = null;
    context.files           = new Object();
    context.availableHosts  = null;
    
    function inArray(obj, array) {
        return (array.indexOf(obj) != -1);
    }
    
    /**
     * Add a single host to cdn
     * @param host string host
     * @return self
     */
    function addHost(host) {
        if (!inArray(host, context.hostList)) context.hostList.push(host);

        return currentInstance;
    }
    
    /**
     * Add a list of hosts to cdn 
     * @param list array of hosts
     * @return self
     */
    function addHosts(list) {
        for (i in list) if (!inArray(list[i], context.hostList)) context.hostList.push(list[i]);
        return currentInstance;
    }
    
    /**
     * Define available servers in location
     * @param id string location identifier
     * @param hosts list array of hosts
     * @return self
     */
    function addLocation(id, hosts) {
        var tmpHosts = new Array;
        for (i in hosts) if (!inArray(hosts[i], tmpHosts)) tmpHosts.push(hosts[i]);
        context.locationList[id] = tmpHosts;
        return currentInstance;
    }
    
    /**
     * Set default location if no matching one is found
     * @param id string location identifier
     * @return self
     */
    function setDefaultLocation(id) {
        if (context.locationList[id] == null) {
            throw new Error('Unknown default location: ' + id);
        } else {
            context.locationDefault = id;
            return currentInstance;
        }
    }
    
    /**
     * Set current location to given identifier
     * @param id string location identifier
     * @return self
     */
    function setLocation(id) {
        /* Use default or throw Error? */
        if (context.locationList[id] == null) {
            // location = locationDefault;
            throw new Error('Unknown location: ' + id);
        }
        
        context.location = id;
        context.availableHosts = null;
        context.files = new Array();
        
        return currentInstance;
    }
    
    /**
     * Set location based on geo information by ip address
     * @param ip string ip address
     * @return self
     */
    function setLocationByIP(ip) {
        return currentInstance;
    }
    
    /**
     * Get full adress for file
     * @param file string file name
     * @return string absolute file address
     */
    function o(file) {
        /* If file is already defined return previous address */
        if (context.files[file]) {
            return context.files[file];
        }
        
        if (context.availableHosts == null) {
            if (context.location != null || context.locationDefault != null) {
                if (context.locationList[context.location]) {
                    context.availableHosts = context.locationList[context.location];
                } else {
                    throw new Error("Set to location: " + context.location + " but not found!");
                }
            } else {
                context.availableHosts = context.hostList;
            }
        }
        
        var nextHost = context.availableHosts.shift();
        context.availableHosts.push(nextHost);
        return context.files[file] = nextHost + '/' + file;
        
        return file;
    }
    
    /* Define Public Access */
    context.addHost = addHost;
    context.addHosts = addHosts;
    context.addLocation = addLocation;
    context.setLocation = setLocation;
    context.o = o;
    
    /* Set [ointer for returning current object */
    var currentInstance = context;
})(exports);