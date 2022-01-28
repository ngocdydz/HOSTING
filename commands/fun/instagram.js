/*
const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');
module.exports = {
    name: 'instagram',
    aliases: ['insta'],
    category: 'fun',
    run: (client, message, args) => {
        if (!args[0]) return message.channel.send('Vui lòng nhập tên instagram!');
        const instagram_id = args.join('  ');
        const url = `https://www.instagram.com/${instagram_id}/?__a=1`
        let res;
        try {
            res = await axios.get(url)
        } catch(e) {
            return message.channel.send('Tên instagram không hợp lệ!');
        }
        const account = res.data.graphql.user;
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(account.full_name)
            .setURL
    }
}
*/