const http = require('http');
const app = require('./app');


const { port } = require('./config')
const server = http.createServer(app);


//TEST
app.get('/', function (req, res) {
    res.status(200).send({
        message: 'User service running...'
    });
});

app.listen(port, (err) => {
    if (err) console.log('Error :c'), process.exit(1);
    console.log(`Servidor corriendo on:\n\nhttp://localhost:${port}`);
});
