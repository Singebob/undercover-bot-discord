import { Message, MessageEmbed } from 'discord.js'
import Undercover from '../../undercover'

exports.run = (bot: any, msg: Message, args: []) => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle("Liste des joueurs actuellement dans la partie")
    .setDescription(Undercover.players.join(", "))
    msg.channel.send(embed)
}