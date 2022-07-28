import "./Login.css";

function Login() {
  return (
    <div
      className="ui container"
      style={{
        fontFamily: "Varela Round",
      }}
    >
      <div className="page-login">
        <div className="ui centered grid container">
          <div className="nine wide column">
            <div className="ui icon warning message">
              <i className="lock icon"></i>
              <div className="content">
                <div className="header">Login failed!</div>
                <p>You might have misspelled your username or password!</p>
              </div>
            </div>
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form" method="POST">
                  <div className="field">
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter E-mail"
                    />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="pass"
                      placeholder="Enter Password"
                    />
                  </div>
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="unlock alternate icon"></i>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
