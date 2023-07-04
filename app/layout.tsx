import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aditiya Book Store',
  description: 'Discover the books related to all fields',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
