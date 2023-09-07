/*CMD
  command: index.html
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

<!DOCTYPE html>
<html>
<head>
  <title>Tips On Colos</title>
  <script src="https://js.paystack.co/v1/inline.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    body {
      background-color: dark; /* Set the background color to green */
      color: white; /* Set text color to white */
    }
    button[type="submit"] {
      background-color: darkblue; /* Set the button background color to green */
      color: white; /* Set button text color to white */
      border: none;
      padding: 10px 20px;
      cursor: pointer;
    }
    button[type="submit"]:hover {
      background-color: lightblue; /* Darken the button color on hover */
    }
  </style>
</head>
<body>
  <h1>About To Pay GHC</h1>
  <p>Please enter your Telegram ID and the amount you want to pay in Ghanaian cedis.</p>
  <form id="paymentForm">
    <div class="form-group">
      <label for="telegram-id">Telegram ID</label>
      <input type="text" id="telegram-id" required />
    </div>
    <div class="form-group">
      <label for="amount">Amount</label>
      <input type="number" id="amount" required />
    </div>
    <div class="form-submit">
      <button type="submit" onclick="payWithPaystack()"> Pay </button>
    </div>
  </form>

<!-- Replace the email field in PaystackPop.setup with the default email -->
<script>
  const paymentForm = document.getElementById('paymentForm');
  paymentForm.addEventListener("submit", payWithPaystack, false);

  function payWithPaystack(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
      key: 'pk_test_37e788c7efdff76527241418a199236efe41f493', // Replace with your public key
      email: 'tipsoncolos@gmail.com', // Set the default email address
      amount: document.getElementById("amount").value * 100,
      currency: 'GHS',
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        let message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
        // Send the payment reference to the telegram bot
        sendToTelegramBot(response.reference);
      }
    });

    handler.openIframe();
  }

  function sendToTelegramBot(reference) {
    // Replace with your telegram bot token and chat id
    let token = '5155038224:AAHP7Ok1M0VRDjk3b4D4MQgLpL36EDC5qCk';
    let chat_id = document.getElementById("telegram-id").value; // Use the Telegram ID entered by the user
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Payment reference: ${reference}`;
    // Use jQuery to make a GET request to the telegram bot API
    $.get(url, function(data, status) {
      console.log(data);
      console.log(status);
    });
  }
</script>
</body>
</html>

