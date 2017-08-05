const Discord = require('discord.js');
const catfacts = require('cat-facts');
const hook = new Discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

let interval;

let send = function() {
    console.log(`sending fact`);
    hook.send(catfacts.random());
}

let stop = function() {
    if (interval) clearInterval(interval);
}

let start = function() {
    stop();
    send(catfacts.random());
    interval = setInterval(send, 300000);
};

module.exports = {
    start: start,
    stop: stop
};
