const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!chk') {
    	msg.channel.sendMessage("APROVADA" + msg.author));
  	}
});

client.on('message', message => {
    if (message.content === '!votdsaonao') {
    	message.reply('ai sim votar nao é legau\n nada ver irmao');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
