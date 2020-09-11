const { BinanceChainClient } = require('ferrum-chain-clients');

async function sendTx() {
  const client = new BinanceChainClient('prod', {
    binanceChainUrl: 'https://dex.binance.org',
  });

  const privateKey = process.argv[2];
  const to = process.argv[3];
  const currency = process.argv[4];
  const amount = process.argv[5];

  const txId = await client.processPaymentFromPrivateKey(privateKey, to, currency, amount);
  console.info(`Sent: ${txId}`);
}

sendTx()
  .then(() => {
    console.info('Finished');
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
