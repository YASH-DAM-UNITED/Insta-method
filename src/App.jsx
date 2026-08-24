import { useState } from "react";


export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Demo login only");
  }

  return (
    <div className="ig-page">
      <section className="hero-side">
        <div className="ig-mark">
          <div className="ig-mark-inner"></div>
        </div>

        <h1 className="hero-title">
          See everyday moments from
          <br />
          your <span>close friends</span>.
        </h1>

        <div className="collage">
          <div className="card card-back-left"></div>
          <div className="card card-back-right"></div>

          <div className="card card-main">
            <div className="fake-person"></div>
            <div className="story-bar"></div>
            <div className="heart">♡</div>
          </div>

          <div className="reaction reaction-heart">♥</div>
          <div className="reaction reaction-star">★</div>
          <div className="reaction reaction-circle"></div>
        </div>
      </section>

      <section className="login-side">
        <div className="login-panel">
          <h2>Log into Instagram</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Mobile number, username or email"
            />

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <button
                className="show-btn"
                type="button"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button className="login-btn" type="submit">
              Log in
            </button>
          </form>

          <button className="forgot-btn" type="button">
            Forgot password?
          </button>

          <button className="facebook-btn" type="button">
            <span className="fb-icon">f</span>
            Log in with Facebook
          </button>

          <button className="create-btn" type="button">
            Create new account
          </button>

          <div className="meta">∞ Meta</div>

          {message && <div className="demo-msg">{message}</div>}
        </div>
      </section>
    </div>
  );
}
