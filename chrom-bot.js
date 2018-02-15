//Mzk3ODU3MTE2MjM4NjQzMjAw.DWb37w.IlFwKc5lh818A5cP3MhYPpDHn7E
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
  console.log("Je suis connecté !");
});

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !');
  }
});

bot.login('Mzk3ODU3MTE2MjM4NjQzMjAw.DWb37w.IlFwKc5lh818A5cP3MhYPpDHn7E');

