/*CMD
  command: m1
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

let res = Libs.ResourcesLib.userRes("balance")
let m = Libs.ResourcesLib.userRes("M11")
let hire = Libs.ResourcesLib.anotherChatRes("hire", "global")
if(res.value() < 50){
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "💰 No enough Money (GHC)",

show_alert: true
})
}else{
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "💸 Congratulations VIP Purchased Check The Bookings Below",

show_alert: true
})
m.add(1)
res.add(-50)
hire.add(1)
Bot.runCommand("WormzVip")
}
