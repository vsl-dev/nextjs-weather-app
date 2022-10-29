import "../styles/globals.css";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
