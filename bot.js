const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.send('Welcome to CatFacts\n');
});

server.listen(port, () => {
	console.log(`Server running on port ${port}`)
});

const Discord = require('discord.js');
const facts = require('cat-facts');
const hook = new Discord.WebhookClient('343165371626553355', 's6SIzYAddOXHCOCmDippF-ZiQDTVJLm7qbx1ZhD4EPIbxc7uI0dxQRYoNU7OQovMx-_B');

hook.send(facts.random());
setInterval(() => {
    hook.send(facts.random());
}, 300000);
