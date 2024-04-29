const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://images-ext-1.discordapp.net/external/eQEE18HKI2KoXq0shfCm12usFB_cMS7YVrtQbbyGblA/%3Fsize%3D2048/https/cdn.discordapp.com/icons/1118859248886091848/a_9bcc3af0808618ff3d0e3643f0202dde.gif?width=215&height=215', 
        url: 'https://discord.gg/greenmc'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [Flame]\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `meme`, `roll`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1170652474563117138/1224660177039396876/MULTI_MUSIC_v1.5.png?ex=661e4cab&is=660bd7ab&hm=f7a542462fabaf9c1530ece5aa72597cff3ac032876bba46df5ddba7e122ea99&`);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/greenmc')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
