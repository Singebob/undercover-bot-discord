import discord from 'discord.js';
import config from './config.json';

const bot: any = new discord.Client();
const trigger = '$'

bot.on('message', (msg: any) => {
  if(msg.content[0] === trigger) {
    const cmd = msg.content.slice(1)
    const args = cmd.split(' ')
    try {
      let commandFile = require(`./commands/${args[0]}`);
      commandFile.run(bot, msg, args)
    } catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        console.error(`${args[0]}: Unknown command.`)
      } else {
        console.error(e)
      }
      msg.reply('¯\\_(ツ)_/¯')
    }
  }
});

bot.login(config.token).catch(console.error);
