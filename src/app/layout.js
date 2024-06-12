import {Jura} from 'next/font/google';
const jura = Jura({subsets: ["latin"],display:'swap',adjustFontFallback:false});
import Header from './components/header/page';

export const metadata = {
  title: "Jamiya || جمعية",
  description: "The Degital ROSCA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jura.className} id='main'>
        <Header/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
