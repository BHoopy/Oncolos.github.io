/*CMD
  command: Setwalletsecre
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
⚙ Your TRX Wallet:


✏️ _Enter Your New TRX Wallet Address_
  ANSWER
  keyboard: 
  aliases: setwalletsecre
CMD*/

var wallet = User.getProperty("wallet")


let msg = data.message

if (msg.length == 34) {

var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage(" *💡 Wallet UUpdated to* `"+message+"`\n\nEnter the amount of TRX your wallet to withdraw")
Bot.runCommand("jay1")
}
else { Bot.sendMessage("_❌ Invalid TRX Walllet_")

Bot.runCommand("Setwalletsecre")}
