var proxy = require('redbird')({ port: 80 });


function changeIp(grupo) {
    switch (grupo) {
        case 'A':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'B':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'C':
            var ip = 'http://34.132.88.81:7050/esb/'
            proxy.register("http://localhost:80/esb/auth/", ip + "auth", {
                onRequest: (req, res, target) => {
                    // called before forwarding is occurred, you can modify req.headers for example
                    // return undefined to forward to default target
                    console.log(target)
                    console.log("=================================================")
                    console.log(req)
                    console.log("=================================================")
                    console.log(res)
                    console.log("=================================================")
                    req.removeHeader('Host'); // changing the header
                },
            });
            proxy.register("http://localhost:80/esb/administrator/", ip + "administrator");
            proxy.register("http://localhost:80/esb/customer/", ip + "customer");
            proxy.register("http://localhost:80/esb/country/", ip + "country");
            break;

        case 'D':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'E':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'F':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'G':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'H':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'I':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'J':
            var ip = 'http://3.15.227.171:3000/esb/auth'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        case 'K':
            var ip = 'http://localhost'
            proxy.register("http://localhost:80/esb/auth", ip + ":5010/auth");
            proxy.register("http://localhost:80/esb/administrator", ip + ":5011/administrator");
            proxy.register("http://localhost:80/esb/customer", ip + ":5000/customer");
            proxy.register("http://localhost:80/esb/country", ip + ":5013/country");
            break;

        default:
            break;
    }

}

changeIp('D');

// OPTIONAL: Setup your proxy but disable the X-Forwarded-For header

// Route to any global ip



