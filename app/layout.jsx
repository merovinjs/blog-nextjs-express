import "../styles/reset.css";
import "../styles/globals.css";
import styles from "./page.module.css";
import Footer from "../components/Foooter/Footer";

import Header from "../components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div className={styles.container}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
