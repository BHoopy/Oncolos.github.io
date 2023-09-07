/*CMD
  command: Tes
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
CMD*/

var git = JSON.parse(content) 
var txid = git.response.transaction.txID
var cur = Bot.getProperty("currency");

var amount = User.getProperty("amount")
var address  = User.getProperty("TRXwallet")

if (!user.first_name) {
  var valid_name = user.last_name
} else {
  var valid_name = user.first_name
}
let refList = Libs.ReferralLib.getRefList()
  let users = refList.getUsers()
  if (users.length < 100000000) {
    var count = users.length
  } else {
    var count = refList.count
  }

var i = "https://tronscan.org/#/transaction/"+txid+""

Bot.sendMessage("💸 _Your Withdrawal Has Been Automatically Processed_\n💰* Amount*: "+message+"\n✅ *Receiver*: "+address+"\n📅 *Txid: Transaction*: [" +
    txid +
    "]("+i+")\n\n📝 _Wait a few hours for your Trx To arrive in your wallet, invite more friends to earn more, our project has been sponsored by top binance and forex traders_ ",{disable_web_page_preview: true});

let payout=Bot.getProperty("payo")
Api.sendMessage({
  chat_id: ""+payout+"",
  text:
    "*♦️ NEW WITHDRAWAL SENT ♦️*\n\n▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️[\n\n♦️  User : "+valid_name+"\n♦️  User ID: "+user.telegramid+" \n♦️  Amount : "+amount+" "+cur+"\n♦️  Referral : "+count+"\n▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️\n♦️ TXID : [" +
    i +
    "]("+txid+")\n\nEarn Free "+cur+" Join Now @"+bot.name+"",
  parse_mode: "Markdown",disable_web_page_preview: true})

var history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = message
  if (history == undefined) {
    var newh =
      "-------------------------------------------------------------------------------------\n" +
      "✅ Amount Withdrawn: " +
      amount+
      " "+cur+"\n\nAddress: "+address+"\n\ntxid "+txid+"\n\n⏰ DATE " +
      time
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "-------------------------------------------------------------@"+bot.name+"------------------------" +
      "\n✅ Amount Withdrawn: " +
      amount+
      " "+cur+"\n\nAddress: "+address+"\n\ntxid "+txid+"\n\n⏰ DATE " +
      time
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }

