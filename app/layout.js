import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jang's Blog",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='navbar'>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About me</Link>
            </li>
            <li class='dropdown'>
              <a href='/port'>PortPolio</a>
              <div class='dropdown-content'>
                <Link href='/port/port1'>portpolio1</Link>
                <Link href='/port/port2'>portpolio2</Link>
                <Link href='/port/port3'>portpolio3</Link>
              </div>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}
