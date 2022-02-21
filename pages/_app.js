import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Navbars from "./partial/navbar"


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Navbars />
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default MyApp
