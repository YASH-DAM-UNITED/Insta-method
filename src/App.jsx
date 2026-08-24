import { useEffect, useState } from "react";

export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplash(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (splash) {
    return (
      <>
        <style>{`
          * { box-sizing: border-box; }

          html, body, #root {
            margin: 0;
            width: 100%;
            min-height: 100%;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
          }

          .splash {
            position: fixed;
            inset: 0;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo {
            width: 88px;
            height: 88px;
            position: relative;
            border-radius: 24px;

            background:
              radial-gradient(circle at 30% 105%, #ffd600 0 18%, #ff7a00 30%, transparent 48%),
              radial-gradient(circle at 0% 0%, #7638fa 0 33%, transparent 58%),
              linear-gradient(135deg, #833ab4, #fd1d1d 50%, #fcb045);
          }

          .logo:before {
            content: "";
            position: absolute;
            inset: 10px;
            border: 6px solid white;
            border-radius: 19px;
          }

          .logo:after {
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

          .dot {
            position: absolute;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: white;
            right: 20px;
            top: 20px;
          }

          .metaSplash {
            position: absolute;
            bottom: 40px;
            color: #777;
            font-size: 15px;
          }
        `}</style>

        <div className="splash">
          <div className="logo">
            <div className="dot"></div>
          </div>

          <div className="metaSplash">from Meta</div>
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
          font-family: inherit;
        }

        .page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 50% 50%;
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

        .miniLogo {
          position: absolute;

          top: 62px;
          left: 70px;

          width: 88px;
          height: 88px;

          border-radius: 23px;

          background:
            radial-gradient(circle at 30% 105%, #ffd600 0 18%, #ff7a00 30%, transparent 48%),
            radial-gradient(circle at 0% 0%, #7638fa 0 33%, transparent 58%),
            linear-gradient(135deg, #833ab4, #fd1d1d 50%, #fcb045);
        }

        .miniLogo:before {
          content: "";
          position: absolute;

          inset: 9px;

          border: 6px solid #050d0f;
          border-radius: 18px;
        }

        .miniLogo:after {
          content: "";

          position: absolute;

          width: 25px;
          height: 25px;

          border: 6px solid #050d0f;
          border-radius: 50%;

          top: 50%;
          left: 50%;

          transform: translate(-50%, -50%);
        }

        .left h1 {
          margin-top: 195px;

          color: white;

          text-align: center;

          font-size: clamp(37px, 3vw, 55px);
          line-height: 1.35;

          font-weight: 500;

          letter-spacing: -1px;
        }

        .left h1 span {
          background: linear-gradient(
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
          margin-top: 35px;

          width: 320px;
          height: 330px;

          position: relative;
        }

        .photo {
          position: absolute;

          width: 190px;
          height: 290px;

          left: 65px;
          top: 10px;

          border-radius: 28px;

          background:
            linear-gradient(
              145deg,
              #555,
              #bc9a78 45%,
              #332328
            );

          box-shadow: 0 20px 60px rgba(0,0,0,.5);
        }

        .behind1,
        .behind2 {
          position: absolute;

          width: 140px;
          height: 220px;

          top: 65px;

          border-radius: 24px;
        }

        .behind1 {
          left: 5px;
          transform: rotate(-8deg);

          background:
            linear-gradient(135deg,#12515d,#161616);
        }

        .behind2 {
          right: 5px;
          transform: rotate(8deg);

          background:
            linear-gradient(135deg,#432b2e,#7f6259);
        }

        /* RIGHT */

        .right {
          min-height: 100vh;

          background: #1f1e22;

          display: flex;
          align-items: center;
          justify-content: center;

          border-left: 1px solid #38363a;
        }

        .login {
          width: 82%;
          max-width: 650px;
        }

        .login h2 {
          color: #f4f4f5;

          margin: 0 0 28px;

          font-size: 23px;
          font-weight: 600;
        }

        .login input {
          display: block;

          width: 100%;
          height: 72px;

          margin-bottom: 14px;

          border-radius: 20px;

          border: 1px solid #626168;

          background: #201f23;

          color: white;

          padding: 0 20px;

          font-size: 17px;

          outline: none;
        }

        .login input::placeholder {
          color: #9a989f;
        }

        .loginButton {
          width: 100%;
          height: 54px;

          margin-top: 14px;

          border: 0;
          border-radius: 999px;

          background: #234f94;

          color: #a4acc0;

          font-size: 18px;
          font-weight: 600;
        }

        .forgot {
          display: block;

          margin: 27px auto 72px;

          border: 0;
          background: none;

          color: white;

          font-size: 16px;
          font-weight: 600;
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

          border-radius: 999px;

          border: 2px solid #299aff;

          background: transparent;

          color: #44a6ff;

          font-size: 17px;
          font-weight: 600;
        }

        .meta {
          margin-top: 27px;

          color: #e8e8ea;

          text-align: center;

          font-size: 20px;
          font-weight: 600;
        }

        /* MOBILE */

        @media(max-width: 760px) {

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

            padding: 65px 18px 35px;

            align-items: flex-start;
          }

          .login {
            width: 100%;
            max-width: 430px;
          }

          .login h2 {
            text-align: center;

            font-size: 30px;

            margin: 35px 0 55px;
          }

          .login input {
            height: 58px;

            border-radius: 14px;

            background: #121212;

            border-color: #3a3a3a;

            font-size: 16px;
          }

          .loginButton {
            height: 48px;

            background: #0866d9;

            color: white;
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

          <div className="miniLogo"></div>

          <h1>
            See everyday moments from
            <br />
            your <span>close friends</span>.
          </h1>

          <div className="visual">
            <div className="behind1"></div>
            <div className="behind2"></div>
            <div className="photo"></div>
          </div>

        </section>


        <section className="right">

          <div className="login">

            <h2>Log into Instagram</h2>

            <form
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Mobile number, username or email"
              />

              <input
                type="password"
                placeholder="Password"
              />

              <button className="loginButton">
                Log in
              </button>
            </form>

            <button className="forgot">
              Forgot password?
            </button>

            <button className="facebook">
              🔵 &nbsp; Log in with Facebook
            </button>

            <button className="create">
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
