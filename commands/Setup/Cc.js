/*CMD
  command: Cc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

❓Do u make make a support message system
Want to get the notification about the user message and will get all message details send by user from last seen by admin

❗️Note:-
Here you may only use text message support
Media will not be supported 

🧩Command:- /support
⌨Answer:- Please write your message here to contact admin.
✅Wait for reply 
🖥BJS:-

var admin_id = "your telegram id"
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

Bot.sendMessage("Your message has been send to admin\nThey will reply u as soon as possible")

var text = "New support Message has came\n\nTotal pending message are " + [msg_count-msg_seen+1]

Bot.sendMessageToChatWithId(admin_id, text)

Bot.setProperty("support_msg_count",msg_count+1,"integer")
Bot.setProperty("support_msg_details",msg_details,"json")



🧩Command:- /check_msg
🖥BJS:- 

var admin_id = "your telegram id"
//you may get it via Bot.sendMessage(user.telegramid)

var msg_count = Bot.getProperty("support_msg_count",0)

var msg_seen = Bot.getProperty("support_msg_seen",0)

var msg_details = Bot.getProperty("support_msg_details",{})


if(user.telegramid != admin_id){return}

if(msg_count-msg_seen < 1){
Bot.sendMessage("You have no any message pending")
return}

var msg = "Here are pending support message sent by users\n\n"
for(var i=[msg_seen+1];i<[msg_count+1];i++){

msg += "*User* : [" + msg_details[i].name + " " + msg_details[i].last_name + "](tg://user?id=" + msg_details[i].userId + ")" + "\n*User Id* : " + msg_details[i].userId + "\n*Message* :\n" + msg_details[i].message + "\n\n Reply it : /reply " + i + "\n\n\n"
}

Bot.setProperty("support_msg_seen",msg_count,"integer")
Bot.sendMessage(msg)

🧩Command:- /reply
🖥BJS:-

var admin_id = "your telegram id"
//you may get it via Bot.sendMessage(user.telegramid)

var msg_details = Bot.getProperty("support_msg_details",{})

if(user.telegramid!=admin_id){return}
if(!params){return}

var user_link = "[" + msg_details[params].name + " " + msg_details[params].last_name + "](tg://user?id=" + msg_details[params].userId +")"

Bot.sendMessage("Please enter the reply to user " + user_link )

Bot.run({
command: "/adminReply",
options: {user_link: user_link,userId: msg_details[params].userId,message_id: msg_details[params].message_id}
})


🧩Command:- /adminReply
✅Wait for reply
🖥BJS:-

var admin_id = "your telegram id"
//you may get it via Bot.sendMessage(user.telegramid)

if(user.telegramid!=admin_id){return}

var option = {reply_to_message_id: options.message_id}
Bot.sendMessageToChatWithId(options.userId,"Reply from Admin:-\n" + message, option)

Bot.sendMessage("Message has been sent to " + options.user_link)
