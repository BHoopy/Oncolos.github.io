/*CMD
  command: broadcastforad
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

var msg = Bot.getProperty("adminBroadcast")
Bot.sendMessage("*"+msg+"*")
