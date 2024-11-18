import './globals.css'; 
import Navbar from '../components/Navbar'; 
import SideNavbar from '../components/SideNavbar'; 
import Footer from '../components/Footer'; 

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Itim&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <title>The Skidoo</title>
      </head>
      <body>
          <div className='flex flex-col md:flex-row w-full'>
            <SideNavbar />
            <div className='flex flex-col w-full'>
              {children}
              <Footer />
            </div>
          </div>
      </body>
    </html>
  );
}