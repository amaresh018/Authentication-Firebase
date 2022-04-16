import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "./firebase";

function App() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
     

      await signup(emailRef.current.value, passwordRef.current.value);

    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div id="main">
      
      <div> <h1>Currently logged in as: { currentUser?.email }</h1> </div>

      <div id="fields">
        <input ref={emailRef} placeholder="Email" /><br/><br/>
        <input ref={passwordRef} type="password" placeholder="Password" />
      </div>

      <button disabled={ loading || currentUser } onClick={handleSignup}>Sign Up</button>
      <button disabled={ loading || currentUser } onClick={handleLogin}>Log In</button>
      <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>

    </div>
  );
}
export default App;
