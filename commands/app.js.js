/*CMD
  command: app.js
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

// It is JS file for web App
// It is NOT BJS

// use Tg Web App
let tg = window.Telegram.WebApp;
tg.MainButton.text = "Changed Text"; 

// get user from Tg Web App
let dataUnsafe = tg.initDataUnsafe;
let user = dataUnsafe.user || {};

function showButton(){
  if (tg.MainButton.isVisible){
    tg.MainButton.hide()
  }else{
    tg.MainButton.show() 
  }
}

function sendData(){
  // GET /someUrl
  let url = "https://api.bots.business/v2/bots/681220/web-app/user-json?";
  
  this.$http.post(url, { initData: tg.initData } ).then(response => {
    // get body data
    console.log(response.body);
    this.answer = response.body
    //alert(response.body)
  }, response => {
    // error callback
  });
}



// we use VueJS here
var vm = new Vue({
    el: '#app',
    data: {
      user: user,
      answer: ""
    },
    methods: {
      showButton: showButton,
      sendData: sendData
    }
});


/*
Telegram.WebApp.onEvent("mainButtonClicked", function(){
   tg.sendData("some string that we need to send"); 
});
*/
