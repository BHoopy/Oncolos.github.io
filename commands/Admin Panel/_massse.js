/*CMD
  command: /massse
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
var moss = [[{title:"♂️ Broadcast Message 💌",command:"/brdmsg"},{title:"♂️ Broadcast Photo 📷",command:"/brdpic"}],[{title:"🔙Back",command:"Admin"}]]
Bot.sendInlineKeyboard(moss,"*💫Mass Setting Area*")
} else {
Bot.sendMessage("❌You are Not Admin")
}
