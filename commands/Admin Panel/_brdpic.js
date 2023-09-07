/*CMD
  command: /brdpic
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *🌌 Send Your Photo And Caption For Broadcast.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin")
if (user.telegramid == ""+admin+""){

Bot.runAll({ 
command: "Photo09",
for_chats: "private-chats",
options: {photo: request.photo[0].file_id, caption: request.caption}
})
Bot.sendMessage("*🌌 Photo Sended To All Users.*")
}else{
Bot.sendMessage("*❌ You're Not An Admin.*")
}
