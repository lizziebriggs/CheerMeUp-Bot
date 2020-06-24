const Discord = require('discord.js')
const client = new Discord.Client();

const token = "NzI1NDc0Mjg3NzA3NzUwNDUx.XvPSRA.O0qck3BcTAiJKHwPbhwiJoOqL8o";

client.on('ready', () => {
  console.log("CheerMeUp bot is online!");
});

client.on('message', msg => {
  if(msg.content === 'HELLO' || msg.content === 'Hello'|| msg.content === 'hello')
  {
    msg.reply("You're a sket");
  }

  if(msg.content === 'i love you' || msg.content === 'I love you')
  {
    msg.reply("I love you too");
  }

  if(msg.content === 'ping')
  {
    msg.channel.send("pong!");
  }

  if(msg.content === 'pong!'|| msg.content === 'pong')
  {
    msg.reply("hey that's my line");
  }
});

client.login(token);
