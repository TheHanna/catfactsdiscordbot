const http = require('http');
const endpoint = `http://${process.env.HOST}`;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to CatFacts\n');
});

let heartbeat;

let beat = function() {
    http.get(endpoint, (req, res) => console.log('thump thump...'));
}

let stop = function() {
    if (heartbeat) clearInterval(heartbeat);
};

let start = function() {
    stop();
    beat(endpoint);
    heartbeat = setInterval(beat, 900000);
};

server.listen(process.env.PORT, () => console.log('Server started'));

module.exports = {
    start: start,
    stop: stop
};
