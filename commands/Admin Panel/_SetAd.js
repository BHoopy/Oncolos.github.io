/*CMD
  command: /SetAd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 📌*Send Id*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = "5292381664"
if (user.telegramid== key){

Bot.sendMessage("✅ Done: Admin Id is\n "+"`"+message+"`");
Bot.setProperty("admin" , message,"string")

}else{
Bot.sendMessage("*❌ You Are Not Allowed To Set Admin*");
}
