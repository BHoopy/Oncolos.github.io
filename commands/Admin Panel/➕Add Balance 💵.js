/*CMD
  command: ➕Add Balance 💵
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: _🛠Enter User id?_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin")
if (user.telegramid ==""+admin+""){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb2");
}else{
if (user.telegramid ==""+admin+""){
let msg = message;
User.setProperty("id", msg, "integer");
Bot.runCommand  ("/bb2");
}else{
return
}
}
