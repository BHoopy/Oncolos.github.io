/*CMD
  command: /kkkk
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dep

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

const TronWeb = require('tronweb');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const tronWeb = new TronWeb({
  fullNode: 'https://api.trongrid.io',
  solidityNode: 'https://api.trongrid.io',
  eventServer: 'https://api.trongrid.io',
  privateKey: 'dacc2888-a00d-4c4e-8f19-a2b7922ba17e'
});

app.use(bodyParser.json());

// Handle payment request
app.post('/payment', async (req, res) => {
  const { address, amount, txHash } = req.body;

  // Verify payment on the blockchain
  const confirmedTx = await tronWeb.trx.getTransaction(txHash);
  const isPaymentValid = confirmedTx.ret[0].contractRet === 'SUCCESS' && confirmedTx.to === address && confirmedTx.amount >= amount;

  if (isPaymentValid) {
    // Process payment and return success response
    // ...
    res.status(200).send('Payment received');
  } else {
    // Return error response
    res.status(400).send('Invalid payment');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

