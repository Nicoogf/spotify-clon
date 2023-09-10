import './globals.css'
import { Inter } from 'next/font/google' ;


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify - Reproductor Web',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>Spotify - Reproductor Web</title>
        <link rel="icon" href= './unnamed.png' />
      </head>
     <html lang="en">
      <body className={inter.className}>{children}</body>
     </html>
    </>
   
  )
}
