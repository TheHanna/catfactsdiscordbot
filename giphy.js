const Discord = require('discord.js');
const giphy = require('giphy-api')(process.env.GIPHY_API_KEY);
const hook = new Discord.WebhookClient(process.env.WEBHOOK_ID, process.env.WEBHOOK_TOKEN);

let interval;

let getRandomGif = function(gifs) {
    min = 0;
    max = gifs.length;
    return gifs[Math.floor(Math.random() * (max - min)) + min].url;
}

let catfact = function() {
    giphy.search('cat fact', (err, res) => {
        if (err) return send(err);
        send(getRandomGif(res.data));
    });
}

let send = function(url) {
    console.log(`sending giphy`);
    hook.send(url);
}

let stop = function() {
    if (interval) clearInterval(interval);
}

let start = function() {
    stop();
    catfact();
    interval = setInterval(catfact, 300000);
};

module.exports = {
    stop: stop,
    start: start
}
