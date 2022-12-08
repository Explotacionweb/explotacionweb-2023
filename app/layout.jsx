import localFont from "@next/font/local";
import Header from "./(components)/Header/Header";
import Footer from "./(components)/Footer/Footer";
const HelveticaNeue = localFont({
  variable: "--helvetica-neue",
  src: [
    {
      path: "../public/fonts/HelveticaNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeue-Medium.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
const Monoid = localFont({
  variable: "--monoid",
  src: [
    // Falta la fuente Light, pedirla a The Mood Project
    {
      path: "../public/fonts/Monoid-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Monoid-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={`${HelveticaNeue.variable} ${Monoid.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
