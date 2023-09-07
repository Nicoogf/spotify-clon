import Image from 'next/image';

import Header from '@/components/Header' ;
import SideBar from '@/components/SideBar';

export default function Home() {
  return (
    <main className="">
        <h1 className='bg-red-100'>
          Inicio
        </h1>
        <Header />
        <SideBar />


    </main>
  )
}
