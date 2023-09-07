/*CMD
  command: H
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var inl = [[{text:"Buy", callback_data:"m1"}]]
var Photo = "https://t.me/Money_Earning_Update/22"
Api.sendPhoto({
photo: Photo,
caption: "*hello* ",
parse_mode: "Markdown",
    reply_markup: { inline_keyboard: inl }})
