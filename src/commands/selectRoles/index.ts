import { MessageEmbed, MessageReaction, User, Message } from 'discord.js'
import { Undercover, ROLESNAMES } from '../../undercover'
import next from '../next';

const selectRoles = (bot: any, msg: Message, args: []) => {
  const embed: MessageEmbed = new MessageEmbed()
      .setTitle('Sélectionnez les rôles pour cette partie')
      .addField('Rôles actuels', Undercover.roles.join(', '))
      .addField('Rôles disponibles', Undercover.allRoles.join(', '))
      .addField('Rôles', '- Undercover: Il reçoit un mot légèrement différent de celui des Civils. \
      Son objectif est de se faire passer pour l’un d’eux.\n\
      - Mr. White:  Il ne reçoit aucun mot. Son but est de faire croire qu\'il en a un, \
      tout en essayant de deviner le mots des civils.\n- Les amoureux: Deux joueurs sont amoureux. \
      Si l\'un d\'eux est éliminé, l\'autre aussi\n\
      - La vengeuse: Quand la vengeuse est éliminée, elle peut éliminer quelqu\'un avec elle.')
      .addField('Ajouter un rôle', 'Pour ajouter un rôle, utilisez la \
      commande addRoles ou réagissez a ce message avec la réaction associée')
      .addField('Supprimer un rôle', 'Pour supprimer un rôle, utilisez la \
      commande deleteRoles ou supprimez votre réaction a ce message')
      .addField('Réaction', '- Undercover: 🕵️\n- Mr. White: 👀\n \
      - Les amoureux: 💑\n- La vengeuse: 🦸‍♀️')
  msg.channel.send(embed).then((botMsg: Message) => {
    botMsg.react('➡️')
    botMsg.react('🕵️')
    botMsg.react('👀')
    botMsg.react('💑')
    botMsg.react('🦸‍♀️').then(() => {
      bot.on('messageReactionAdd', (reaction: MessageReaction, user: User) => {
        if (user.id != bot.user.id) {
          switch (reaction.emoji.name) {
            case '🦸‍♀️':
              console.log("Ajout roles: vengeuse")
              msg.channel.send("Ajout roles: vengeuse")
              break;
            case '➡️':
              next(bot, msg, [])
              break;
          }
        }
      });
      bot.on('messageReactionRemove', (reaction: MessageReaction, user: User) => {
        switch (reaction.emoji.name) {
          case '🦸‍♀️':
            break;
        }
      })
    })
  })
}

exports.run = selectRoles

export default selectRoles
