const Discord = require('discord.js');
const facts = require('cat-facts');
const hook = new Discord.WebhookClient('343164815356985345', 'w94cuJjigPzQLVClM3nDsNpiOwuuDtlEIn-0JpKSQU4uj-WrXuPYS7Cl8Wc1Fzw7LoVe');

setInterval(() => {
    hook.send(facts.random());
}, 300000);
