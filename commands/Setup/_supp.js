/*CMD
  command: /supp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Setup

  <<ANSWER
💬 *You are Now in direct contact with our administrator*


`How can we help you? `
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: support ☎
CMD*/

var admin_id = "5292381664"
//you may get it via Bot.sendMessage(user.telegramid)

var msg_count = Bot.getProperty("support_msg_count",0)

var msg_seen = Bot.getProperty("support_msg_seen",0)

var msg_details = Bot.getProperty("support_msg_details",{})

if(!msg_details[msg_count+1]){msg_details[msg_count+1] = {}}


if(!user.last_name){user.last_name = " "}
msg_details[msg_count+1].message = message 
msg_details[msg_count+1].userId = user.telegramid
msg_details[msg_count+1].name = user.first_name
msg_details[msg_count+1].last_name = user.last_name
msg_details[msg_count+1].message_id = request.message_id

Bot.sendMessage("*Your message has been sent to admin*\n_They will reply u as soon as possible_")

var text = "*New support Message has came*\n\n`Total pending message are`: "+ [msg_count-msg_seen+1]+"\n\nCheck all Inbox: /checkinbox"

Bot.sendMessageToChatWithId(admin_id, text)

Bot.setProperty("support_msg_count",msg_count+1,"integer")
Bot.setProperty("support_msg_details",msg_details,"json")


