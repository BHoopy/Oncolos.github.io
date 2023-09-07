/*CMD
  command: /payy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dep

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: pay
CMD*/

var url = WebApp.getUrl({ command: "index" })

// it is exaple 
Api.sendMessage({
  text:
    "🤑 Try demo ordering in Web App or page from help." +
    "\n\nYou can also get URL for setup in @BotFather - use /getUrl ",
  reply_markup: {
    inline_keyboard: [
      
        // open the any web page on button pressing
        { text: "Pay", web_app: { url: url } }
      ],
  }
})
