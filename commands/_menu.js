/*CMD
  command: /menu
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let currency = Bot.getProperty("currency");
var user = User.getProperty("status")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.sendKeyboard(
    "♦️ Account Balance ♦️\n✨ Refferals,⚡️ PREMIUM ODDS⚡️\n🎁Bonus,FREE ODDS\nSupport ☎,🆘 About Us,\nLoad Account🏧",
    "*♦️New Sportybet Odds Mining Bot *♦️\n\n🫳 Share Your Refferal Link To Your Friends & Earn Points To Access VIP __ Your Refferal Link.\n\n`🎁 Earn Per Refferal: GHC 5`\nYour Inviting Link:\n\n"+reflink+""
  )
}
if (user == "left") {
  Bot.runCommand("/start")
}
var a = User.getProperty("lol7")
if (a == undefined) {
User.setProperty("lol7","dn","string")

let u = Libs.ReferralLib.currentUser.attractedByUser()

if (u) {
 var reff = ""+ u.telegramid+""
let currency = Bot.getProperty("currency");
let ref = Bot.getProperty("refbo")

let res = Libs.ResourcesLib.anotherUserRes("balance",reff);  

res.add(+5)
Bot.sendMessageToChatWithId(reff, "*🎉 Congratulations You Have Received GHC 5* _For inviting new user_")

} else {
}
}
