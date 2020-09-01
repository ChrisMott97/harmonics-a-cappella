import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = getSortedPostsData();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div className="container">
      <Head>
        <title>Harmonics</title>
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        {/* <h1 className="title">Harmonics A Cappella</h1> */}
        <img src="/logo.png" className="logo desktop" alt="Harmonics Logo" />
        <img src="/rsz_icon.png" className="logo mobile" alt="Harmonics Logo" />
        <p className="description"></p>
        <div className="grid">
          <a href="https://www.facebook.com/exeterharmonics/" target="_blank">
            <img src="/facebook.png"></img>
          </a>
          <a href="https://www.instagram.com/harmonics_exeter/" target="_blank">
            <img src="/instagram.png"></img>
          </a>
          <a
            href="https://www.youtube.com/channel/UCO4_XUWkLlReHJjho7GE1qg"
            target="_blank"
          >
            <img src="/youtube.png"></img>
          </a>
          <a
            href="https://music.apple.com/us/artist/harmonics-a-cappella/1438584094"
            target="_blank"
          >
            <img src="/itunes.png"></img>
          </a>
          <a
            href="https://open.spotify.com/artist/6qyOWCZth9YQX78kb3ngmy?si=b5gYGWdUTXOzu6msYQQcXA"
            target="_blank"
          >
            <img src="/spotify.png"></img>
          </a>
          <a
            href="https://www.exeterguild.org/societies/44753/"
            target="_blank"
          >
            <img src="/guild.jpg"></img>
          </a>
          <a href="https://twitter.com/harmonicsexeter" target="_blank">
            <img src="/twitter.png"></img>
          </a>
        </div>
        {/* <Link href="/blog">
          <a>Blog</a>
        </Link> */}

        {/* <div className="grid">
          {data.map(({ id, date, title }) => (
            <a key={id} className="card">
              <h3>{title} &rarr;</h3>
              <small>{date}</small>
            </a>
          ))}
        </div> */}
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer> */}

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

        main {
          // padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
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
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
