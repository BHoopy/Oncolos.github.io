/*CMD
  command: 👋 Refferals
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ✨ refferals
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let refList = Libs.ReferralLib.getRefList()
  let users = refList.getUsers()
  if (users.length < 100000000) {
    var count = users.length
  } else {
    var count = refList.count
  }

let res = Libs.ResourcesLib.userRes("referral");

let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let lib = Libs.ReferralLib


 Bot.sendMessage("*👫 Invite Refferals*\n\nShare Your Refferal Link To Your Friends & Earn Extra Gh cedis On Every That Joined On Your Refferal Link.\n\n🎁 Earn Per Refferal: GHC 5\n\nTotal Refferals: "+count+"\n\n*Your Inviting Link:\n"+reflink+"*\n\n*👻 Note\nEmpty or spam users are deleted after checking..*")}
