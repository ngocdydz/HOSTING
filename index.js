const { Client, Intents, Message, MessageEmbed, Util, Collection } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Sẵn sàng!');

    client.user.setPresence({
        activity: {
            name: "GAME CÙNG NGỌC TRINH",
            type: 'PLAYING'
        },
        status: 'online'
    })
})
client.commands = new Collection ();
client.aliases = new Collection ();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
    if (message.author.bot) return;
    const prefix = '!'
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);

    /*
    switch(cmd) {
    */
})


client.login(token);