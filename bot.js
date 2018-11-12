const Discord = require('discord.js');
const client = new Discord.Client();
console.log("scrpit By Golden");


client.on("ready", () => {
let channel =     client.channels.get("511496928832389121")
setInterval(function() {
channel.send(`كيكي دو يو لوف مي`);
}, 25)
})
 
 
client.login('NTExNDk4OTQ5Mjk1NjAzNzIy.DsryMg.SM-hRTBdxcrt-na4aV7mBiNSr8Y');
