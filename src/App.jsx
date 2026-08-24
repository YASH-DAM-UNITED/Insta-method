import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-logo">
          <div className="splash-logo-inner"></div>
        </div>

        <div className="splash-meta">
          from Meta
        </div>
      </div>
    );
  }

  return (
    <div className="ig-page">

      <section className="hero-side">
        <div className="hero-logo">
          <div className="hero-logo-inner"></div>
        </div>

        <h1 className="hero-title">
          See everyday moments from
          <br />
          your <span>close friends</span>.
        </h1>

        <div className="collage">
          <div className="card card-left"></div>
          <div className="card card-right"></div>
          <div className="card card-center"></div>
        </div>
      </section>

      <section className="login-side">
        <div className="login-panel">

          <h2>Log into Instagram</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Mobile number, username or email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button className="login-btn">
              Log in
            </button>
          </form>

          <button className="forgot-btn">
            Forgot password?
          </button>

          <button className="facebook-btn">
            <span className="fb-circle">f</span>
            Log in with Facebook
          </button>

          <button className="create-btn">
            Create new account
          </button>

          <div className="meta-logo">
            ∞ Meta
          </div>

        </div>
      </section>

    </div>
  );
}
