const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require("discord.js");
const axios = require('axios');
const client = new Discord.Client();
let version = process.env.VERSION;
let prefix = process.env.PREFIX;
let token = process.env.TOKEN;

client.once('ready', () => {
    console.log(`v${version}`); //logs once bot is loaded
    client.user.setPresence({
        status: "online",
        activity: {
            name: "$help",
            type: "WATCHING"
        }
    });
});

client.on('message', async message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === "proxies") {
        if (!args.length) { //if no arguments
            return message.channel.send(`Select a type of Proxies`);
        } else if (args[0] === "http") { //argument is http

            const fetch = require('node-fetch')
            return new Promise((resolve, reject) => {
                fetch('https://api.proxyscrape.com/?request=amountproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all')
                    .then(response => response.json())
                    .then(data => {
                        resolve(data)
                    }).catch(err => reject(err))
            }).then(data => {
                 return axios.get('https://api.proxyscrape.com?request=lastupdated&proxytype=http')
                  .then((response) => {
                       const dms = new Discord.MessageEmbed()
                        .setTitle("Check your DMs!")
                        .setColor(0x00AE86)
                        .setFooter("Coded by Animus#9658", "https://cdn.discordapp.com/avatars/785613951374458881/f2d4a696c0a212cdfa11c057e87a2ecb.png?size=2048")
                        .setTimestamp()

                    message.channel.send(dms)

                   
                    const http = new Discord.MessageEmbed()
                        .setTitle("Proxies")
                        .setColor(0x00AE86)
                        .setDescription("HTTP Proxies - [**Download**](https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all)\nProxies Amount: " + data + "\nLast Update: "+ response.data )
                        .setFooter("Coded by Animus#9658", "https://cdn.discordapp.com/avatars/785613951374458881/f2d4a696c0a212cdfa11c057e87a2ecb.png?size=2048")
                   return message.author.send(http);
                 

                  })
                  .catch((err) => {
                      throw new Error(err.response.data);
                  });
               
            });
        } else if (args[0] === "socks4") { //argument is socks4

            const fetch = require('node-fetch')
            return new Promise((resolve, reject) => {
                fetch('https://api.proxyscrape.com/?request=amountproxies&proxytype=socks4&timeout=10000&country=all&ssl=all&anonymity=all')
                    .then(response => response.json())
                    .then(data => {
                        resolve(data)
                    }).catch(err => reject(err))
            }).then(data => {
                 return axios.get('https://api.proxyscrape.com?request=lastupdated&proxytype=socks4')
                  .then((response) => {
                       const dms = new Discord.MessageEmbed()
                        .setTitle("Check your DMs!")
                        .setColor(0x00AE86)
                        .setFooter("Coded by Animus#9658", "https://cdn.discordapp.com/avatars/785613951374458881/f2d4a696c0a212cdfa11c057e87a2ecb.png?size=20482")
                        .setTimestamp()

                message.channel.send(dms)

                const socks4 = new Discord.MessageEmbed()
                    .setTitle("Proxies")
                    .setColor(0x00AE86)
                    .setDescription("SOCKS4 Proxies - [**Download**](https://api.proxyscrape.com/?request=getproxies&proxytype=socks4&timeout=10000&country=all&ssl=all&anonymity=all)\nProxies Amount: " + data + "\nLast Update: "+ response.data )
                    .setFooter("Coded by Animus#9658", "https://cdn.discordapp.com/avatars/785613951374458881/f2d4a696c0a212cdfa11c057e87a2ecb.png?size=20482")
                    .setTimestamp()

                return message.author.send(socks4);
                  
                 })
                  .catch((err) => {
                      throw new Error(err.response.data);
                  });
               

            });

        } else if (args[0] === "socks5") { //argument is socks5

            const fetch = require('node-fetch')
            return new Promise((resolve, reject) => {
                fetch('https://api.proxyscrape.com/?request=amountproxies&proxytype=socks5&timeout=10000&country=all&ssl=all&anonymity=all')
                    .then(response => response.json())
                    .then(data => {
                        resolve(data)
                    }).catch(err => reject(err))
            }).then(data => {
                 return axios.get('https://api.proxyscrape.com?request=lastupdated&proxytype=socks5')
                  .then((response) => {
                       const dms = new Discord.MessageEmbed()
                        .setTitle("Check your DMs!")
                        .setColor(0x00AE86)
                        .setFooter("Coded by Animus#9658", "https://cdn.discordapp.com/avatars/785613951374458881/f2d4a696c0a212cdfa11c057e87a2ecb.png?size=2048")
                        .setTimestamp()

                message.channel.send(dms)

                const socks4 = new Discord.MessageEmbed()
                    .setTitle("Proxies")
                    .setColor(0x00AE86)
                    .setDescription("SOCKS5 Proxies - [**Download**](https://api.proxyscrape.com/?request=getproxies&proxytype=socks5&timeout=10000&country=all&ssl=all&anonymity=all)\nProxies Amount: " + data + "\nLast Update: "+ response.data )
                    .setFooter("Coded by Animus#9658", "https://cdn.discordapp.com/avatars/785613951374458881/f2d4a696c0a212cdfa11c057e87a2ecb.png?size=2048")
                    .setTimestamp()

                return message.author.send(socks4);
                  
                 })
                  .catch((err) => {
                      throw new Error(err.response.data);
                  });
               

            });
          } 

    } else if (command === "commands") { //help command

        const embed = new Discord.MessageEmbed()
            .setTitle("Command List")
            .setColor(0xf7757c)
            .setDescription(`**Proxies Commands:**\n$proxies [type] - **(types: http, socks4, socks5)**\n\n**Info Commands:**\n$ping, $help, $stats, $invite`)
            .setFooter("Coded by Animus#9658", "https://cdn.discordapp.com/avatars/785613951374458881/f2d4a696c0a212cdfa11c057e87a2ecb.png?size=2048")
            .setTimestamp()

        message.channel.send(embed);

    }

    if (command === 'ping') {

        let ping = Math.floor(message.client.ping);

        message.channel.send("Pinging...")
            .then(m => {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`📥 Latency: \`${m.createdTimestamp - message.createdTimestamp} ms\``)
                    .setColor(0xf7757c)

                m.edit(embed);

            });

    }

    if (command === 'help') {

        const embed = new Discord.MessageEmbed()
            .setColor(0xf7757c)
            .addField(`**Prefix**`, `$`)
            .addField(`**Coder**`, `Animus#9658`)
            .addField(`**Commands List**`, `$commands`)
            .addField(`**Invite Link**`, `[Click Here](https://discord.com/api/oauth2/authorize?client_id=785638385027907584&permissions=67488881&scope=bot)`)
            .addField(`**Support Serer**`, `[Click Here](https://discord.gg/)`)

        message.channel.send(embed);

    }

    if (command === 'invite') {

        const embed = new Discord.MessageEmbed()
            .setColor(0xf7757c)
            .addField(`**Support Server**`, "[Click Here](https://discord.gg/)")
            .addField(`**Invite Link**`, `[Click Here](https://discord.com/api/oauth2/authorize?client_id=785638385027907584&permissions=67488881&scope=bot)`)

        message.channel.send(embed);

    }
    if (command === 'stats') {

        const moment = require("moment");
        require('moment-duration-format');

        const uptime = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");


        const embed = new Discord.MessageEmbed()
            .setColor(0x66ff66)

            .setAuthor(`Bot Stats`, client.user.avatarURL())
            .addField(`Coder`, `Animus#9658`)
            .addField(`Version`, `0.1`)

            .addField(`Uptime`, `${uptime}`)
            .addField(`Guilds`, `${client.guilds.cache.size}`)
            .addField(`Users`, `${client.users.cache.size}`)

        message.channel.send(embed);


    } 

});

client.login(process.env.TOKEN);
