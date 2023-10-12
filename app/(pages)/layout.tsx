import Navbar from '@/components/navbar/navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <body className={inter.className}>
          <Navbar/>
          {children}
      </body>
  )
}
