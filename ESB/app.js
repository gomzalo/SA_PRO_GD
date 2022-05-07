var proxy = require('redbird')({ port: 3000 });


function changeIp(grupo) {
    switch (grupo) {
        case 'A':
            var ip = 'http://104.154.104.29'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'B':
            var ip = 'http://35.226.118.223:3000/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'C':
            var ip = 'http://34.132.88.81:7050/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth/", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator/", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer/", ip + "customer");

            break;

        case 'D':
            var ip = 'http://35.188.184.126'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + ":5010/auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + ":5000/customer");

            break;

        case 'E':
            var ip = 'http://35.193.56.199:3005/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'F':
            var ip = 'http://34.71.127.255:3000/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'G':
            var ip = 'http://34.125.61.119:3000/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'H':
            var ip = 'http://34.132.139.69:5000/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'I':
            var ip = 'http://34.125.81.45:3000/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'J':
            var ip = 'http://3.15.227.171:3000/esb/'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        case 'K':
            var ip = 'http://104.154.104.29'
            proxy.register("http://104.154.104.29:3000/esb/auth", ip + "auth");
            proxy.register("http://104.154.104.29:3000/esb/administrator", ip + "administrator");
            proxy.register("http://104.154.104.29:3000/esb/customer", ip + "customer");

            break;

        default:
            break;
    }

}

changeIp('D');

// OPTIONAL: Setup your proxy but disable the X-Forwarded-For header

// Route to any global ip



