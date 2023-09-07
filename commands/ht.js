/*CMD
  command: ht
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("real")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ wallet Not set_")
}else{
if (balance.value() < 100){
Bot.sendMessage("_✖ Insufficient Balance ✖!_\n💰 Minimum Withdraw Is 100 TRX")
}else{
Bot.sendMessage("_📤 Enter Amount of TRX You Want to Withdraw._")
Bot.runCommand("jay1")
}
}}
