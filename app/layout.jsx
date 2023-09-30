import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Challenge Acronex'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
