/*CMD
  command: Wormz
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: enter Your Bot Business gmail

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

//Clone Code Started
if (Bot.getProperty("ban" + user.telegramid) == user.telegramid) {
  Bot.sendMessage("you are ban ")
  return
}
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "*Done Bot Sent To " + message + "*\n\n*©️ Made By Wormz*"
)

//Made By @TechnoSami
