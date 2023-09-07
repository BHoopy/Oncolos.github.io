/*CMD
  command: WormzVip
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("On test\n\nC3AAAAB5")

let msg1 = "VIP BOUGHT" 
let user_link = Libs.commonLib.getLinkFor(user)
let msg = "Message from: " + user_link +
     "\n" +
     "okay" 
     "\n/reply" + user.telegramid;

Bot.sendMessageToChatWithId(5292381664, msg1);
Bot.sendMessage("*Your Code Is Above:*");
