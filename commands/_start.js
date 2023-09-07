/*CMD
  command: /start
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

let stb= Bot.getProperty("start6","👋 No start message set")
//var button = [{ title: " Joined ✅", command: "✅ check" }]
//Bot.sendInlineKeyboard(
//  button,
 //"*🚫 To Be Able To Use The Bot, JOIN THE CHANNEL BELLOW TO ACCESS THE BOT\n@daily3x\n\n After Joining click ✅Joined*"
//)
let welcome = Libs.ResourcesLib.userRes("wel");
let res = Libs.ResourcesLib.userRes("balance");
let totalusers = Libs.ResourcesLib.anotherChatRes("totalusers", "global");
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
if(welcome.value()<1){
welcome.set(1)
totalusers.add(1);
status.add(1)
}


function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.telegramid, 
    "➕You just Refered new user: @" + user.username);
}
function doAlreadyAttracted(){
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
Bot.runCommand("/menu") 


