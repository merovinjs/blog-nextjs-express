import "../styles/globals.css";
import Footer from "../components/Foooter/Footer";
<<<<<<< HEAD

import Headerr from "../components/Header/Headerr";
=======
import Header from "../components/Header/Header";

>>>>>>> dev
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
