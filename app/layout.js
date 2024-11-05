import './globals.css'; 
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>The Skidoo</title>
      </head>
      <body>
        <div className="">
          <Navbar />
          <main className="">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}