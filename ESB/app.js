var proxy = require('redbird')({ port: 80 });

var proxy = require('redbird')({ port: 80, xfwd: false });


function changeIp(grupo) {
    switch (grupo) {
        case 'D':
            proxy.register("http://localhost/esb/", "http://167.23.42.67:8000");
            proxy.register("http://167.23.42.67:8000", "http://167.23.42.67:8000");
            proxy.register("http://167.23.42.67:8000", "http://167.23.42.67:8000");
            break;

        default:
            break;
    }

}


// OPTIONAL: Setup your proxy but disable the X-Forwarded-For header

// Route to any global ip



