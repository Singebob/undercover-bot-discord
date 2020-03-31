import { Message } from 'discord.js'
import { Undercover, STEPS } from '../../undercover'

const next = (bot: any, msg: Message, args: []) => {
  if (Undercover.step == STEPS.gameOver) {
    Undercover.step = STEPS.game
  } else {
    Undercover.step += 1
  }
  console.log("next: ", Undercover)
  switch (Undercover.step) {
    case STEPS.selectRoles:
      // Call function selectRoles
      console.log("selectRoles")
      msg.channel.send("selectRoles")
      break;
    case STEPS.selectNumberRoles:
      // Call function selectNumberRoles
      console.log("selectNumberRoles")
      msg.channel.send("selectNumberRoles")
      break;
    case STEPS.selectModes:
      // Call function selectModes
      console.log("selectModes")
      msg.channel.send("selectModes")
      break;
    case STEPS.game:
      // Call function start
      console.log("game")
      msg.channel.send("game")
      break;
    case STEPS.gameOver:
      // Call function gameOver
      console.log("gameOver")
      msg.channel.send("gameOver")
      break;
  }
}

exports.run = next

export default next