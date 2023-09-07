/*CMD
  command: appJS 
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

// secure user url
var userUrl = WebApp.getUrl({ command: "user.json" })

WebApp.render({
  template: "app.js",
  options: { userUrl: userUrl }
})
