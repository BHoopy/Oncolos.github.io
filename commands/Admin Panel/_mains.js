/*CMD
  command: /mains
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var admin = 
Bot.getProperty("admin")
if (user.telegramid == ""+admin+""){
var mis = [[{title:"⚙️Set Currency 💵",command:"⚙️Set Currency 💵"}],[{title:"⚙️Set Daily Bonus",command:"⚙️Set Daily Bonus"},{title:"⚙️ Set Refer Bonus 🤴",command:"⚙️ Set Refer Bonus 🤴"}],[{title:"🔙Back",command:"Admin"}]]
Bot.sendInlineKeyboard(mis,"*🚨Main Setting Area*")
} else {
Bot.sendMessage("❌You are Not Admin")
}
