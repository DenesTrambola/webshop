import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../stores/slices/authSlice";
import { setCartFromDB } from "../stores/slices/cartSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    fetch(`http://localhost:5001/users?email=${email}`)
      .then((res) => res.json())
      .then((users) => {
        const user = users.find((u) => u.password === password);
        if (user) {
          dispatch(login(user));
          dispatch(setCartFromDB(user.cart || []));
          navigate("/");
        } else {
          setError("Invalid email or password");
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <big>{"IF YOU DON'T HAVE AN ACCOUNT YET, REGISTER "}</big>
      <Link to="/register">HERE</Link>
    </div>
  );
};

export default Login;
