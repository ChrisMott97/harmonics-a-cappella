import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Auditions() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="container">
      <Head>
        <title>Harmonics</title>
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <div style={{ margin: "20px" }}>Now a quick form:</div>
        <iframe
          id="gform"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd3G9JdKiifAoo9paj4uT_GCYbU0_AEacTK1RLElu-sjZVBQA/viewform?embedded=true"
          height="400vh"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          onLoad={() => setLoaded(true)}
        >
          Loading…
        </iframe>
        <small style={{ margin: "20px", fontSize: "3vh", textAlign: "center" }}>
          When you've completed the form and clicked Submit, click Next below.
        </small>
        <button
          onClick={() => {
            router.push("/auditions/video");
          }}
        >
          Next
        </button>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #abf0d1;
        }

        iframe {
          width: 40%;
        }

        @font-face {
          font-family: "helvetica-local";
          src: url("/fonts/HelveticaNeue-Light.woff2"); // pattern: /directoryName/file.extension
        }

        div {
          font-size: 5vh;
        }
        button {
           display: inline-block;
           padding: 0.35em 1.2em;
           border: 0.1em solid #ffffff;
           margin: 0 0.3em 0.3em 0;
           border-radius: 0.3em;
           box-sizing: border-box;
           text-decoration: none;
           font-family: "helvetica-local", sans-serif;
           font-weight: 300;
           color: #000000;
           text-align: center;
           transition: all 0.5s;
          font-size: 20px;
           background-color: #ffffff;
          opacity: 0.7;
          cursor: pointer;
        }
        button:hover {
          opacity: 1;
          transition: all 0.5s;
        }

        main {
          // padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        // .title a {
        //   color: #0070f3;
        //   text-decoration: none;
        // }

        // .title a:hover,
        // .title a:focus,
        // .title a:active {
        //   text-decoration: underline;
        // }

        // .title {
        //   margin: 0;
        //   line-height: 1.15;
        //   font-size: 4rem;
        // }

        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          // max-width: 800px;
          // margin-top: 3rem;
        }

        .grid > a {
          margin: 1rem;
          // padding: 1.5rem;
          // transition: color 0.15s ease, border-color 0.15s ease;
        }

        .grid > a > img {
          height: 80px;
          transition: opacity 0.5s;
        }

        .grid > a > img:hover,
        .grid > a > img:focus,
        .grid > a > img:active {
          color: #0070f3;
          border-color: #0070f3;
          opacity: 0.5;
          transition: opacity 0.5s;
        }

        // .card h3 {
        //   margin: 0 0 1rem 0;
        //   font-size: 1.5rem;
        // }

        // .card p {
        //   margin: 0;
        //   font-size: 1.25rem;
        //   line-height: 1.5;
        // }

        .logo {
          width: 50%;
        }

        .mobile {
          display: none;
        }

        .desktop {
          display: block;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            // flex-direction: column;
          }
          .grid > a > img {
            height: 50px;
          }
          .grid > a {
            margin: 0.5em;
          }
          .logo {
            width: 100%;
          }
          .desktop {
            display: none;
          }
          .mobile {
            display: block;
          }
          iframe {
            width: 100%;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "helvetica-local";
          // font-family: Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}