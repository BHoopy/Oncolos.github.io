/*CMD
  command: m3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("balance")
let m = Libs.ResourcesLib.userRes("M13")
let hire = Libs.ResourcesLib.anotherChatRes("hire", "global")
if(res.value() < 150){
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "👋 No enough purchase  balance",

show_alert: true
})
}else{
Api.answerCallbackQuery({

callback_query_id: request.id,
text: "✅ Miner Hired",

show_alert: true
})
m.add(1)
res.add(-150)
hire.add(1)
Bot.runCommand("minerM1")
}
