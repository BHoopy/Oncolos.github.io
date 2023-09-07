/*CMD
  command: /strt
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


HTTP.post({
  url: "https://api.projectoid.site/v1/telegram/botpanel/adduser.php",
  body: {
    bot_id: bot.token.split(":")[0],
    access_token: accessToken,
    user_id: user.telegramid
  }
})


