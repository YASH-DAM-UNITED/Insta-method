// src/App.jsx
import "./index.css";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo login only");
  };

  return (
    <div className="page">
      <main className="loginWrap">
        <section className="loginCard">
          <div className="logoText">Instagram</div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Phone number, username, or email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button type="submit">
              Log in
            </button>
          </form>

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button className="facebookBtn">
            <span className="fbIcon">f</span>
            Log in with Facebook
          </button>

          <a className="forgot" href="#forgot">
            Forgot password?
          </a>
        </section>

        <section className="signupBox">
          <p>
            Don't have an account?{" "}
            <span>Sign up</span>
          </p>
        </section>

        <div className="getApp">
          <p>Get the app.</p>

          <div className="appButtons">
            <div className="storeBtn">
              Google Play
            </div>

            <div className="storeBtn">
              Microsoft
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footerLinks">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
        </div>

        <div className="copyright">
          <span>English</span>
          <span>© 2026 Demo Portal</span>
        </div>
      </footer>
    </div>
  );
}
