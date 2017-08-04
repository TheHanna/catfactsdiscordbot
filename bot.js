const Discord = require('discord.js');
const facts = require('cat-facts');
const client = new Discord.Client();

client.login("MzQzMTYyNDM5NDY4MzE4NzIw.DGaKcA.2XSrvdw1s7OWI8IGLN1UgQmARho");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("catfacts")) {
    message.channel.send(facts.random());
    setInterval(() => {
        message.channel.send(facts.random());
    }, 300000);
  }
});
