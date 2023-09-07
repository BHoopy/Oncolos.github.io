/*CMD
  command: 🖥 Mining
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ⚡️ premium odds⚡️
CMD*/

let m1 = Libs.ResourcesLib.userRes("M11")

let m2 = Libs.ResourcesLib.userRes("M12")
let m3= Libs.ResourcesLib.userRes("M13")

var inl = [[{text:"Buy VIP 1", callback_data:"m1"}]]
var Photo = "https://t.me/trxSuperMinerV01/9"
Api.sendPhoto({
photo: Photo,
caption: "🥇 VIP1\n\n PREMIUM:\n✴️ Accessible Untill Tickets Are Won ✔️✔️\n\n📅Purchased : "+m1.value()+" *Times*\n\n💵 Price: GHC 50",
parse_mode: "Markdown",
    reply_markup: { inline_keyboard: inl }})


