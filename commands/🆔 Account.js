/*CMD
  command: 🆔 Account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ♦️ account balance ♦️
CMD*/

var ba = Libs.ResourcesLib.userRes("real")
var balance = Libs.ResourcesLib.userRes("balance")
//balance.add(6999)
var lib = Libs.ReferralLib
//var refList = lib.currentUser.refList.get();
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let refList = Libs.ReferralLib.getRefList()
  let users = refList.getUsers()
  if (users.length < 100000000) {
    var count = users.length
  } else {
    var count = refList.count
  }
var Valid_name = Libs.commonLib.getNameFor(user)
Bot.sendMessage(" *♦️ Account Balance ♦️*\n💮 User Name: "+Valid_name+"\n💮 User ID: "+user.telegramid+"\n\n💡*Balance:* `"+balance.value().toFixed(2)+"` GHC\n\n💮 Total Refferals: "+count+"\n\n* ♦️*Kindly Use The Support With Ur Id If You Want To Withdraw Your Money")



