import { useState } from "react";
import "../slogin.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setMessage("Checking login...");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        const user = users.find((u: any) => u.email === email);

        if (user) {
          setMessage("Login Successful ✅");
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setMessage("Email not found ❌");
        }
      })
      .catch(() => {
        setMessage("Error connecting to server ❌");
      });
  }

  return (
    <div className="overlay">
  <div className="login-box">
        <h1>Welcome 🌸</h1>
        <p>Please login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">Enter</button>
        </form>

        <p id="result">{message}</p>
      </div>
    </div>
  );
}

export default Login;
