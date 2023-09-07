/*CMD
  command: wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")


let msg = data.message

if (msg.length == 34) {

var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage(" *💡 Wallet Updated*\n\nCongratulations, this wallet will receive all your future withdrawals, Please make sure it's yours.\n\n*✅ Doge Wallet:* `"+message+"`")}
else { Bot.sendMessage("_❌ Invalid TRX Walllet_")
Bot.sendMessage("*Please Enter a valid TRX Wallet address*")
Bot.runCommand("wallet")}
