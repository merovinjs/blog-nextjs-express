import "../styles/globals.css";
import Footer from "../components/Foooter/Footer";
import Header from "../components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
