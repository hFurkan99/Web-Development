import { authActions } from "../store/auth-slice.js";
import { useDispatch } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();

  function handleLogin(event) {
    event.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <main className="auth">
      <section>
        <form onSubmit={handleLogin}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
