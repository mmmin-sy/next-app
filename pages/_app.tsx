import NavBar from "../components/organisms/NavBar/NavBar";
import GlobalStyle from '../styles/globalStyles';

export default function App({ Component, pageProps}){
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}