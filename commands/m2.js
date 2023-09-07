/*CMD
  command: m2
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
let m = Libs.ResourcesLib.userRes("M12")
let hire = Libs.ResourcesLib.anotherChatRes("hire", "global")
if(res.value() < 100){
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "💰 No enough purchase  balance",

show_alert: true
})
}else{
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "✅ VIP Purchased",

show_alert: true
})
m.add(1)
res.add(-100)
hire.add(1)
Bot.runCommand("WormzVip")
}
