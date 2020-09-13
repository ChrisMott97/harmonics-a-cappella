// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
// This default export is required in a new `pages/_app.js` file.
import { motion, AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <div style={{ backgroundColor: "#abf0d1" }}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
