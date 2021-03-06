import { MessageEmbed, MessageReaction, User, Message } from 'discord.js'
import Undercover from '../../undercover'
import next from '../next';

exports.run = (bot: any, msg: Message, args: []) => {
  const embed: MessageEmbed = new MessageEmbed()
      .setTitle('Bienvenue pour une nouvelle partie d\'Undercover')
      .setThumbnail('https://lh3.googleusercontent.com/jtdsLb6b1oycRQuMaRAhUXITmHhOhZZdzidy6LhyRquO5bBfnD0ksY_M7hToB7S8gQ')
      .setColor(0x00ff04)
      .addField('Règles du jeu', 'Chaque joueur et joueuse sera un personnage parmi les trois qui existent:\n\
      - Tu peux être un Civil\n Chaque Civil reçoit le même mot secret. \
      Son objectif est de démasquer le ou les Undercover et le ou les Mr et Mrs White.\n \
      - Tu peux être Undercovers. Chaque Undercover reçoit un mot légèrement différent de celui des Civils. \
      Son objectif est de se faire passer pour l’un d’eux.\n\
      - Tu peux être Mr ou Mrs White, et dans ce cas là, tu ne recevras aucun mot. \
      Ton but sera alors de faire croire que tu en as un, en essayant de deviner le mot des Civils.\n\n')
      .addField('Comment participer?', 'Réagissez à ce message avec l\'emoji 👍')
  msg.channel.send(embed).then((botMsg: Message) => {
    botMsg.react('👍').then(() => {
      botMsg.react('➡️').then(() => {
        bot.on('messageReactionAdd', (reaction: MessageReaction, user: User) => {
          if (user.id != bot.user.id) {
            switch (reaction.emoji.name) {
              case '👍':
                msg.channel.send('Un nouveau joueur rejoint la partie: ' + user.username)
                Undercover.players.push(user)
                break;
              case '➡️':
                next(bot, msg, [])
                console.log("play: ", Undercover)
                break;
            }
          }
        });
        bot.on('messageReactionRemove', (reaction: MessageReaction, user: User) => {
          switch (reaction.emoji.name) {
            case '👍':
              msg.channel.send('Un joueur a quitté la partie: ' + user.username)
              Undercover.players.splice(Undercover.players.indexOf(user))
              break;
          }
        })
      })
    })
  })
}