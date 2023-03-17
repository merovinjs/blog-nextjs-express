import "../styles/globals.css";
import Footer from "../components/Foooter/Footer";

import Headerr from "../components/Header/Headerr";
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Headerr />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
