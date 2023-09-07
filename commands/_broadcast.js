/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Kindly Enter Your Message To Broadcast


  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var accessToken = "Your Bot's Access Token" //Generate from projectoid.site/services/telegram/bot/register
var admin = "5292381664" //get by Bot.sendMessage(user.telegramid)
if (user.telegramid == admin) {
  try {
    var msg = message
    function broadcast(type, method, cap, fileid) {
      HTTP.post({
        url: "https://api.projectoid.site/v1/telegram/botpanel/broadcast.php",
        headers: { "content-type": "application/json" },
        body: {
          method: method,
          text: cap,
          access_token: accessToken,
          bot_token: bot.token,
          admin: user.telegramid,
          type: type,
          file_id: fileid,
          caption: cap,
          parseMode: "html", //you can change it to Markdown
          disableWebPreview: true,
          protectContent: false //pass true if you don't allow to forward/save message
        }
      })
    }
    var boarding = " <b><u>Broadcast By Admin</u></b> \n\n"
    var caption = !request.caption
      ? boarding
      : boarding + " <i>Message =</i> " + request.caption

    if (request.photo[0]) {
      broadcast("photo", "sendPhoto", caption, request.photo[0].file_id)
      return
    }
    if (request.text) {
      broadcast(
        "text",
        "sendMessage",
        " <b><u>Broadcast By Admin</u></b> \n\n<i>Message</i> = " + message,
        null
      )
      return
    }
    if (request.video) {
      broadcast("video", "sendVideo", caption, request.video.file_id)
      return
    }
    if (request.audio) {
      broadcast("audio", "sendAudio", caption, request.audio.file_id)
      return
    }
    if (request.document) {
      broadcast("document", "sendDocument", caption, request.document.file_id)
      return
    }
    if (request.sticker) {
      broadcast("sticker", "sendSticker", null, request.sticker.file_id)
      return
    }
    if (request.animation) {
      broadcast(
        "animation",
        "sendAnimation",
        caption,
        request.animation.file_id
      )
      return
    }
    if (request.voice) {
      broadcast("voice", "sendVoice", caption, request.voice.file_id)
      return
    }
    if (request.video_note) {
      broadcast("video_note", "sendVideo", caption, request.video_note.file_id)
      return
    }
  } catch (err) {
    Bot.sendMessage(
      err + "\n\n*Please Reach out @BjsCodesChat with Error Screenshot.*"
    )
  }
  return
}
Bot.sendMessage("*You are Not a Admin*")



