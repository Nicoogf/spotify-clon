import Image from 'next/image';
import Head from 'next/head';

import Header from '@/components/Header' ;
import SideBar from '@/components/SideBar';

export default function Home() {
  return (

    <>
    <Head>
      <title>Replica de Spotify</title>
      <meta name="Description" content='Replica de Practica - Spotify'></meta>
      <link rel="icon" href='./favicon.ico' />
    </Head>

    <div className='bg-spotify-gray min-h-screen text-gray-300'>
        <Header />
        <SideBar />
        <main>
          <h1 className=""> Hola mundo </h1>  
        </main>
             
    </div>
    </>
    
  )
}
