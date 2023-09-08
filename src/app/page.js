// app/page.tsx
"use client";

import Header from '@/components/Header' ;
import SideBar from '@/components/SideBar' ;
import "../app/globals.css" ;

import { useState } from "react" ;
import ListAlbums from '@/components/ListAlbums';



export default function Home() {

  const [ showSidebar , setShowSidebar ] = useState( false );

  return (

    <>   
      <div className='bg-spotify-gray min-h-screen text-gray-300'>
          <Header setShowSidebar={ setShowSidebar }/>
          <SideBar showSidebar={ showSidebar } setShowSidebar={ setShowSidebar }/>
          <div className='pt-28 pl-72 pr-8'>
           <ListAlbums title="Spotify Playlist"></ListAlbums>
          </div>
          
        
              
      </div>
    </>
    
  )
}
