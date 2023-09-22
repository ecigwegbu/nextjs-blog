import '../styles/global.css';
import styles from '../components/layout.module.css';
export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <p className={styles.container}>Hello World! -_app.js</p>
        </>
    )

}