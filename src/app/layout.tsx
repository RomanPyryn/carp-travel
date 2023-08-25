import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: 'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
			<body className={inter.className}>
				<ToastContainer position="top-right" autoClose={2500} theme="colored" />
				<Header/>
				{children}
			</body>
    </html>
  )
}
