/*CMD
  command: jay1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdraw = Libs.ResourcesLib.userRes("withdrawal");
var rtwitter = User.getProperty("twitter", message, "string")
var twitter = User.getProperty("twitter", message, "string")
var wallet = User.getProperty("wallet", message, "string")
let stat = Bot.getProperty(""+user.telegramid+"")
let res = Libs.ResourcesLib.userRes("referral")
var balance = Libs.ResourcesLib.userRes("balance")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"

var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}

if(message < 100){
Bot.sendMessage("❌ Minimum amount to withdraw 100 TRX")
}else{
if(message > balance.value()){
Bot.sendMessage("_🚫 You Can Withdraw Maximum: "+balance.value().toFixed(6)+" TRX")
}else{
User.setProperty("amountbch",message,"string")
var bch = User.getProperty("wallet")
var characters = "1234567890ABCDEFGHIJKLUVWXYZ12345678901234567890123456789012345678901234567890"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

Bot.setProperty("b",generateString(65), "string")
var b = Bot.getProperty("b")
var TRrX = "https://tronscan.org/#/transaction/"+b+""

Bot.sendMessage("💸 _Your Withdrawal Has Been Automatically Processed_\n💰* Amount*: "+message+"\n✅ *Receiver*: "+wallet+"\n📅 *Txid: Transaction*: [" +
    b +
    "]("+TRrX+")\n\n📝 _Wait a few hours for your Trx To arrive in your wallet, invite more friends to earn more, our project has been sponsored by top binance and forex traders_ ",{disable_web_page_preview: true});
Api.sendMessage({
  chat_id: "@trxSuperMinerV01",
  text:
    "*📥 New Withdrawal* [" +
    user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")📥\n\n*Amount*: " +
    message +
    " *TRX\nTransaction*: [" +
    b +
    "]("+TRrX+")\n\n*@trxSuperMinerV01*",
  parse_mode: "Markdown",disable_web_page_preview: true})
balance.add(-message)
withdraw.add(+message)
}}



