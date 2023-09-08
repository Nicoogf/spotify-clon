// app/page.tsx
"use client";

import Header from '@/components/Header' ;
import SideBar from '@/components/SideBar' ;
import "../app/globals.css" ;

import { useState } from "react" ;



export default function Home() {

  const [ showSidebar , setShowSidebar ] = useState( false );

  return (

    <>   
      <div className='bg-spotify-gray min-h-screen text-gray-300'>
          <Header setShowSidebar={ setShowSidebar }/>
          <SideBar showSidebar={ showSidebar } setShowSidebar={ setShowSidebar }/>
        
          <main>
            <h1 className=""> Hola mundo </h1>  
          </main>
              
      </div>
    </>
    
  )
}
