/*CMD
  command: 🏧 Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💰withdraw
CMD*/


let balance = Libs.ResourcesLib.userRes("balance")
if (balance.value() < 100){
Bot.sendMessage("_✖ Insufficient Balance ✖!_\n💰 Minimum Withdraw Is 100 Points")
}else{

Bot.runCommand("Setwalletsecre")
}


