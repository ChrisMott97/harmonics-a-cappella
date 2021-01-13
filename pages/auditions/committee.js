import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import james from "../../public/images/James.jpg";
import jamesWebp from "../../public/images/James.webp";
import chris from "../../public/images/Chris.jpg";
import chrisWebp from "../../public/images/Chris.webp";
import lizzie from "../../public/images/Lizzie.jpg";
import lizzieWebp from "../../public/images/Lizzie.webp";
import erin from "../../public/images/Erin.jpg";
import erinWebp from "../../public/images/Erin.webp";
import george from "../../public/images/George.jpg";
import georgeWebp from "../../public/images/George.webp";

// const Image = ({ src }) => {
//   return (
//     <div className="image-container">
//       <img className="blur-image" src={require(`/images/${src}?lqip`)} />
//       <img src={require(`/images/${src}?webp`)} />
//       <style jsx>{`
//         .image-container: {
//           position: relative:
//         }
//         .blur-image img {
//           blur(25px);
//           width: 300px;
//           height: 200px;
//         }
//         img {
//           position: absolute;
//           width: 300px;
//           height: 200px;
//           top: 0;
//           left: 0;
//         }
//     `}</style>
//     </div>
//   );
// };

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
        <div style={{ margin: "20px", fontSize: "4vh", textAlign: "center" }}>
          First, say hello to our committee!
        </div>
        <div className="grid" style={{ margin: "20px" }}>
          {/* <div className="card" style={{ backgroundImage: { james } }} /> */}
          {/* <img className="card" src={james} />
            <img className="card" src={jamesWebp} /> */}
          <div style={{ textAlign: "center", fontSize: "2vh" }}>
            <picture>
              <source srcSet={jamesWebp} type="image/webp" />
              <source srcSet={james} type="image/jpeg" />
              <img className="card" src={james} />
            </picture>
            <br />
            James
            <br />
            President
          </div>
          <div style={{ textAlign: "center", fontSize: "2vh" }}>
            <picture>
              <source srcSet={chrisWebp} type="image/webp" />
              <source srcSet={chris} type="image/jpeg" />
              <img className="card" src={chris} />
            </picture>
            <br />
            Chris
            <br />
            Treasurer
          </div>
          <div style={{ textAlign: "center", fontSize: "2vh" }}>
            <picture>
              <source srcSet={lizzieWebp} type="image/webp" />
              <source srcSet={lizzie} type="image/jpeg" />
              <img className="card" src={lizzie} />
            </picture>
            <br />
            Lizzie
            <br />
            Musical Director
          </div>
          <div style={{ textAlign: "center", fontSize: "2vh" }}>
            <picture>
              <source srcSet={erinWebp} type="image/webp" />
              <source srcSet={erin} type="image/jpeg" />
              <img className="card" src={erin} />
            </picture>
            <br />
            Erin
            <br />
            Musical Director
          </div>
          <div style={{ textAlign: "center", fontSize: "2vh" }}>
            <picture>
              <source srcSet={georgeWebp} type="image/webp" />
              <source srcSet={george} type="image/jpeg" />
              <img className="card" src={george} />
            </picture>
            <br />
            Georgina
            <br />
            Social and Welfare Secretary
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <div
              className="card"
              style={{ backgroundImage: "url('/images/Chris.png?lqip')" }}
            />
            Chris
            <br />
            Treasurer
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              className="card"
              style={{ backgroundImage: "url('/images/Erin.png?lqip')" }}
            />
            Erin
            <br />
            Musical Director
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              className="card"
              style={{ backgroundImage: "url('/images/Lizzie.png?lqip')" }}
            />
            Lizzie
            <br />
            Musical Director
          </div> */}
        </div>
        <button
          onClick={() => {
            router.push("/auditions/signup");
          }}
        >
          Hello!
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

        .card {
          background-position: center;
          background-size: contain;
          width: 30vh;
          height: 30vh;
          margin: 20px;
        }

        iframe {
          width: 40%;
        }

        @font-face {
          font-family: "helvetica-local";
          src: url("/fonts/HelveticaNeue-Light.woff2"); // pattern: /directoryName/file.extension
        }

        // div {
        //   font-size: 5vh;
        // }
        button {
           display: inline-block;
           padding: 0.35em 1.2em;
           border: 0.1em solid #ffffff;
           margin: 0 0.3em 0.3em 0;
           border-radius: 0.3em;
           box-sizing: border-box;
           text-decoration: none;
           font-family: "helvetica-local", sans-serif;
           color: #000000;
           text-align: center;
           transition: all 0.5s;
          font-size: 2vh;
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
            flex-wrap: wrap;
            // flex-direction: column;
          }
          .card {
            height: 20vh;
            width: 20vh;
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
