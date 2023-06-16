import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo Herrería',
  description: 'Empresa familiar dedicada a la Herrería',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es' data-theme='cupcake'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
