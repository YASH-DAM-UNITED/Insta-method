import { useState } from "react";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    setMessage("Demo page — login is disabled.");
  }

  return (
    <div className="page">

      <main className="main">

        <div className="login-container">

          <section className="login-card">

            <div className="instagram-logo">
              Instagram
            </div>

            <form onSubmit={handleLogin}>

              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  autoComplete="off"
                />
              </div>

              <div className="input-wrapper password-wrapper">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="off"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword((current) => !current)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              <button
                className="login-button"
                type="submit"
              >
                Log in
              </button>

            </form>

            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <button
              className="facebook-login"
              type="button"
            >
              <span className="facebook-icon">
                f
              </span>

              Log in with Facebook
            </button>

            <button
              className="forgot-password"
              type="button"
            >
              Forgot password?
            </button>

            {message && (
              <div className="demo-message">
                {message}
              </div>
            )}

          </section>


          <section className="signup-card">

            <p>
              Don't have an account?{" "}
              <strong>
                Sign up
              </strong>
            </p>

          </section>


          <section className="app-section">

            <p>
              Get the app.
            </p>

            <div className="download-buttons">

              <div className="download-button">
                <small>
                  GET IT ON
                </small>

                <strong>
                  Google Play
                </strong>
              </div>

              <div className="download-button">
                <small>
                  Get it from
                </small>

                <strong>
                  Microsoft
                </strong>
              </div>

            </div>

          </section>

        </div>

      </main>


      <footer>

        <div className="footer-links">

          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>

        </div>

        <div className="footer-bottom">

          <span>
            English
          </span>

          <span>
            © 2026 UI Demo
          </span>

        </div>

      </footer>

    </div>
  );
}
