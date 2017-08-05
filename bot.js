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
const hook = new Discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

hook.send(facts.random());
setInterval(() => {
	console.log('sending fact');
    hook.send(facts.random());
}, 300000);
