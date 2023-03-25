import "../styles/reset.css";
import "../styles/globals.css";
import styles from "./page.module.css";
import Footer from "../components/Foooter/Footer";

import Header from "../components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={styles.container}>
        <Header className={styles.header} />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
