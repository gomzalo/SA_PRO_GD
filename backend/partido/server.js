const http = require('http');
const app = require('./app');


const { port, url } = require('./config')
const server = http.createServer(app);


//TEST
app.get('/', function (req, res) {
    res.status(200).send(`
    <!--html-->
    <!doctype html>
    <html lang="en">
    <head>
        <title>Soccer Stats Partido Server</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://bootswatch.com/5/zephyr/bootstrap.min.css">
        <meta charset="utf-8" />
    </head>
    <body>
        <center>
        <h1>Partido server running!</h1>
        </center>
    </body>
    </html>
    <!--!html-->
    `);
});

app.listen(port, (err) => {
    if (err) console.log('Error :c'), process.exit(1);
    console.log(`Server running on:\n\n${url}:${port}`);
});
