import "../styles/globals.css";

//подключаем стили для всех страниц, дополнительные данные, обработка ошибок...

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
