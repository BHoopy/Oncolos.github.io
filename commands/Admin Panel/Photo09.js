/*CMD
  command: Photo09
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var pto = options.photo
var caption = options.caption
Api.sendPhoto({
photo: pto,
caption: "*📣 Important Announcement\n"+caption+"*"})
