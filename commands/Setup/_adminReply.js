/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Setup

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin_id = "5292381664"
//you may get it via Bot.sendMessage(user.telegramid)

if(user.telegramid!=admin_id){return}

var option = {reply_to_message_id: options.message_id}
Bot.sendMessageToChatWithId(options.userId,"Reply from Admin:-\n" + message, option)

Bot.sendMessage("Message has been sent to " + options.user_link)
