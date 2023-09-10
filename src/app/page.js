// app/page.tsx
"use client";

import Header from '@/components/Header' ;
import SideBar from '@/components/SideBar' ;
import "../app/globals.css" ;

import { useState } from "react" ;
import ListAlbums from '@/components/ListAlbums' ;



export default function Home() {

  const [ showSidebar , setShowSidebar ] = useState( false );

  const cardsData = [
    {
      titulo: 'El Tesoro de los Inocentes',
      descripcion: 'Los Fundamentalistas del Aire Acondicionado',
      imagenSrc: 'https://cdns-images.dzcdn.net/images/cover/ff5adb1213a28785d3af9aa3135eef5b/264x264.jpg',
    },
    {
      titulo: 'Buen Finde',
      descripcion: 'La Mono',
      imagenSrc: 'https://radioxpilar.com.ar/wp-content/uploads/2023/05/unnamed-2-1024x1024.jpg',
    },
    {
      titulo: 'Al Parecer Todo Ha Sido Una Trampa',
      descripcion: 'Airbag',
      imagenSrc: 'https://cdns-images.dzcdn.net/images/cover/89e8276552c1bb8a78f7a752ebbc829b/500x500.jpg',
    },
    {
      titulo: 'El Tunel de la Vida',
      descripcion: 'El Plan de la Mariposa',
      imagenSrc: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/30/9e/e2/309ee2cf-af30-fc85-c3a7-87c441224f85/8445162238083.jpg/400x400cc.jpg',
    },
    {
      titulo: 'Donde Vas ',
      descripcion: 'Skay Beilinson',
      imagenSrc: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/d1/45/d9/d145d9cd-8fae-61ac-571e-3e5879230a64/8429006399178.jpg/400x400cc.jpg',
    },
    {
      titulo: '¡Bang! ¡Bang! Estás liquidado',
      descripcion: 'Patricio Rey y sus Redonditos de Ricota',
      imagenSrc: 'https://www.clarin.com/img/2019/09/14/QTUQmcJRp_720x0__1.jpg',
    },
    {
      titulo: 'Bohemio',
      descripcion: 'Andres Calamaro',
      imagenSrc: 'https://www.calamaro.com/wp-content/uploads/2013/10/bohemio.jpg',
    },
    // Agrega más objetos de datos según sea necesario.
  ];

  const titulos = 
    [ 
      {nombreDelTitulo : "Escuchados Recientemente"} ,
      {nombreDelTitulo : "Tus artistas favoritos"} ,
      {nombreDelTitulo : "En tendendicia"} ,
      {nombreDelTitulo : "Novedades para ti"} ,  
      {nombreDelTitulo : "Rock nacional"} ,
      {nombreDelTitulo : "Nuevos Lanzamientos"} ,
      {nombreDelTitulo : "Lo mejor de cada artista"} ,
      {nombreDelTitulo : "Episodios para ti"} 
    ]

  return (

    <>   
      <div className='bg-spotify-gray min-h-screen text-gray-300'>
          <Header setShowSidebar={ setShowSidebar }/>
          <SideBar showSidebar={ showSidebar } setShowSidebar={ setShowSidebar }/>

          <div className='pt-28 md:pl-72 p-8'>

           <ListAlbums cardsData={ cardsData } titulos= "Escuchados Recientemente"></ListAlbums>
           <ListAlbums cardsData={ cardsData } titulos= "Tus artistas favoritos"></ListAlbums>
           <ListAlbums cardsData={ cardsData } titulos= "En tendendicia"></ListAlbums>
           <ListAlbums cardsData={ cardsData } titulos= "Novedades para ti"></ListAlbums>
           <ListAlbums cardsData={ cardsData } titulos= "Rock nacional"></ListAlbums>
           <ListAlbums cardsData={ cardsData } titulos= "Nuevos Lanzamientos"></ListAlbums>
           <ListAlbums cardsData={ cardsData } titulos= "Lo mejor de cada artista"></ListAlbums>
           <ListAlbums cardsData={ cardsData } titulos= "Episodios para ti"></ListAlbums>

          </div>
          
        
              
      </div>
    </>
    
  )
}
