import localFont from '@next/font/local'
import Header from './(components)/Header/Header'
import Footer from './(components)/Footer/Footer'
const HelveticaNeue = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeue-Medium.ttf',
      weight: '700',
      style: 'normal',
    }
  ],})
const Monoid = localFont({
  src: [
    {
      path: '../public/fonts/Monoid-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Monoid-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
})
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className={`${HelveticaNeue.className} ${Monoid.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
