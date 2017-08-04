const Discord = require('discord.js');
const facts = require('cat-facts');
const client = new Discord.Client();

client.login("MzQzMTUwNzE5NjA1NDA3NzU3.DGaAqQ.tZX6S9ttJLzUo4dqNfqewWXZGs4");

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
