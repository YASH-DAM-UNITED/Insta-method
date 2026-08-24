import { useEffect, useState } from "react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const canLogin =
    username.trim().length > 0 &&
    password.length > 0;

  function handleLogin(e) {
    e.preventDefault();

    if (!canLogin) return;

    // Never send or save the entered credentials.
    // Clear them before going to Instagram.
    setUsername("");
    setPassword("");

    // Send the user to Instagram's real login page.
    window.location.href =
      "https://www.instagram.com/accounts/login/";
  }

  if (showSplash) {
    return (
      <>
        <style>{`
          * {
            box-sizing: border-box;
          }

          html,
          body,
          #root {
            margin: 0;
            width: 100%;
            min-height: 100%;
          }

          body {
            font-family:
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              Arial,
              sans-serif;
          }

          .splash {
            position: fixed;
            inset: 0;

            background: #000;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          .splashLogo {
            width: 85px;
            height: 85px;

            position: relative;

            border-radius: 23px;

            background:
              radial-gradient(
                circle at 30% 105%,
                #ffd600 0 18%,
                #ff7a00 30%,
                transparent 48%
              ),
              radial-gradient(
                circle at 0% 0%,
                #7638fa 0 33%,
                transparent 58%
              ),
              linear-gradient(
                135deg,
                #833ab4,
                #fd1d1d 50%,
                #fcb045
              );

            animation: appear .5s ease;
          }

          .splashLogo::before {
            content: "";

            position: absolute;
            inset: 9px;

            border: 6px solid white;
            border-radius: 18px;
          }

          .splashLogo::after {
            content: "";

            position: absolute;

            width: 25px;
            height: 25px;

            border: 6px solid white;
            border-radius: 50%;

            top: 50%;
            left: 50%;

            transform: translate(-50%, -50%);
          }

          .splashDot {
            position: absolute;

            width: 8px;
            height: 8px;

            border-radius: 50%;

            background: white;

            right: 20px;
            top: 19px;
          }

          .fromMeta {
            position: absolute;

            bottom: 40px;

            color: #777;
            font-size: 15px;
          }

          @keyframes appear {
            from {
              opacity: 0;
              transform: scale(.82);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>

        <div className="splash">

          <div className="splashLogo">
            <div className="splashDot"></div>
          </div>

          <div className="fromMeta">
            from Meta
          </div>

        </div>
      </>
    );
  }

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          background: #1f1e22;

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Arial,
            sans-serif;
        }

        button,
        input {
          font: inherit;
        }

        .page {
          min-height: 100vh;

          display: grid;

          grid-template-columns:
            50% 50%;
        }


        /* LEFT */

        .left {
          min-height: 100vh;

          background: #050d0f;

          display: flex;
          flex-direction: column;

          align-items: center;

          position: relative;

          overflow: hidden;
        }

        .igIcon {
          position: absolute;

          top: 65px;
          left: 70px;

          width: 86px;
          height: 86px;

          border-radius: 23px;

          background:
            radial-gradient(
              circle at 30% 105%,
              #ffd600 0 18%,
              #ff7a00 30%,
              transparent 48%
            ),
            radial-gradient(
              circle at 0% 0%,
              #7638fa 0 33%,
              transparent 58%
            ),
            linear-gradient(
              135deg,
              #833ab4,
              #fd1d1d 50%,
              #fcb045
            );
        }

        .igIcon::before {
          content: "";

          position: absolute;

          inset: 9px;

          border: 6px solid #050d0f;

          border-radius: 18px;
        }

        .igIcon::after {
          content: "";

          position: absolute;

          width: 24px;
          height: 24px;

          border: 6px solid #050d0f;

          border-radius: 50%;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);
        }

        .left h1 {
          margin-top: 195px;

          color: white;

          text-align: center;

          font-size:
            clamp(36px, 3vw, 55px);

          line-height: 1.35;

          font-weight: 500;

          letter-spacing: -1px;
        }

        .left h1 span {
          background:
            linear-gradient(
              90deg,
              #ff6248,
              #ff245f,
              #dd36ff
            );

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;
        }

        .visual {
          position: relative;

          width: 330px;
          height: 330px;

          margin-top: 30px;
        }

        .photo1,
        .photo2,
        .photo3 {
          position: absolute;

          border-radius: 25px;

          box-shadow:
            0 20px 50px
            rgba(0,0,0,.45);
        }

        .photo1 {
          width: 145px;
          height: 225px;

          top: 70px;
          left: 10px;

          transform:
            rotate(-8deg);

          background:
            linear-gradient(
              135deg,
              #17505a,
              #222,
              #765238
            );
        }

        .photo2 {
          width: 150px;
          height: 235px;

          top: 65px;
          right: 10px;

          transform:
            rotate(7deg);

          background:
            linear-gradient(
              135deg,
              #38252c,
              #806058,
              #1c1c1c
            );
        }

        .photo3 {
          width: 195px;
          height: 300px;

          left: 68px;
          top: 10px;

          background:
            linear-gradient(
              150deg,
              #444,
              #b89376 50%,
              #37242a
            );
        }


        /* RIGHT */

        .right {
          min-height: 100vh;

          background: #1f1e22;

          border-left:
            1px solid #37363a;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .loginBox {
          width: 82%;

          max-width: 650px;
        }

        .loginBox h2 {
          margin:
            0 0 28px;

          color: #f4f4f5;

          font-size: 23px;

          font-weight: 600;
        }

        .loginBox input {
          display: block;

          width: 100%;

          height: 72px;

          margin-bottom: 14px;

          padding:
            0 20px;

          border:
            1px solid #626168;

          border-radius: 20px;

          background: #201f23;

          color: white;

          outline: none;

          font-size: 17px;
        }

        .loginBox input:focus {
          border-color: #99979f;
        }

        .loginBox input::placeholder {
          color: #99969e;
        }


        /* DISABLED LOGIN */

        .loginButton {
          width: 100%;

          height: 54px;

          margin-top: 14px;

          border: 0;

          border-radius: 999px;

          background: #234879;

          color: #727e93;

          font-size: 18px;

          font-weight: 600;

          cursor: default;

          transition:
            background .18s,
            color .18s,
            transform .1s;
        }


        /* ENABLED */

        .loginButton.enabled {
          background: #0866d9;

          color: white;

          cursor: pointer;
        }

        .loginButton.enabled:hover {
          background: #0875f5;
        }

        .loginButton.enabled:active {
          transform: scale(.99);
        }

        .forgot {
          display: block;

          margin:
            27px auto 72px;

          border: 0;

          background: none;

          color: white;

          font-size: 16px;

          font-weight: 600;

          cursor: pointer;
        }

        .facebook {
          width: 100%;

          height: 54px;

          border: 0;

          border-radius: 999px;

          background: #29292c;

          color: #bbb;

          font-size: 17px;

          font-weight: 600;
        }

        .create {
          width: 100%;

          height: 54px;

          margin-top: 16px;

          border:
            2px solid #299aff;

          border-radius: 999px;

          background: transparent;

          color: #44a6ff;

          font-size: 17px;

          font-weight: 600;
        }

        .meta {
          margin-top: 27px;

          text-align: center;

          color: #e8e8ea;

          font-size: 20px;

          font-weight: 600;
        }


        /* MOBILE */

        @media(max-width:760px) {

          .page {
            display: block;

            background: #000;
          }

          .left {
            display: none;
          }

          .right {
            width: 100%;

            min-height: 100vh;

            background: #000;

            border: 0;

            padding:
              70px 18px
              35px;

            align-items:
              flex-start;
          }

          .loginBox {
            width: 100%;

            max-width: 430px;
          }

          .loginBox h2 {
            text-align: center;

            margin:
              35px 0
              55px;

            font-size:
              30px;
          }

          .loginBox input {
            height: 58px;

            border-radius: 14px;

            background: #121212;

            border-color: #393939;

            font-size: 16px;
          }

          .loginButton {
            height: 48px;
          }

          .forgot {
            margin-bottom: 55px;
          }

          .facebook {
            background: transparent;

            color: white;
          }

          .create {
            height: 50px;
          }

          .meta {
            margin-top: 55px;

            color: #888;
          }
        }
      `}</style>

      <div className="page">

        <section className="left">

          <div className="igIcon"></div>

          <h1>
            See everyday moments from
            <br />

            your{" "}
            <span>
              close friends
            </span>.
          </h1>

          <div className="visual">

            <div className="photo1"></div>

            <div className="photo2"></div>

            <div className="photo3"></div>

          </div>

        </section>


        <section className="right">

          <div className="loginBox">

            <h2>
              Log into Instagram
            </h2>

            <form onSubmit={handleLogin}>

              <input
                type="text"
                placeholder="Mobile number, username or email"
                value={username}

                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
              />

              <input
                type="password"
                placeholder="Password"
                value={password}

                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="submit"

                disabled={!canLogin}

                className={
                  canLogin
                    ? "loginButton enabled"
                    : "loginButton"
                }
              >
                Log in
              </button>

            </form>

            <button
              className="forgot"
              type="button"
              onClick={() =>
                window.location.href =
                  "https://www.instagram.com/accounts/password/reset/"
              }
            >
              Forgot password?
            </button>

            <button
              className="facebook"
              type="button"
              onClick={() =>
                window.location.href =
                  "https://www.instagram.com/accounts/login/"
              }
            >
              🔵 &nbsp;
              Log in with Facebook
            </button>

            <button
              className="create"
              type="button"
              onClick={() =>
                window.location.href =
                  "https://www.instagram.com/accounts/emailsignup/"
              }
            >
              Create new account
            </button>

            <div className="meta">
              ∞ Meta
            </div>

          </div>

        </section>

      </div>
    </>
  );
}
