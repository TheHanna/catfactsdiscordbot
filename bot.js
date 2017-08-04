const Discord = require('discord.js');
const facts = require('cat-facts');
const hook = new Discord.WebhookClient('343165371626553355', 's6SIzYAddOXHCOCmDippF-ZiQDTVJLm7qbx1ZhD4EPIbxc7uI0dxQRYoNU7OQovMx-_B');

hook.send(facts.random());
setInterval(() => {
    hook.send(facts.random());
}, 300000);
