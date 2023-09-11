// app/page.tsx
"use client";

import Header from '@/components/Header' ;
import SideBar from '@/components/SideBar' ;
import "../app/globals.css" ;

import { useState } from "react" ;
import ListAlbums from '@/components/ListAlbums' ;



export default function Home() {

  const [ showSidebar , setShowSidebar ] = useState( false );

  const masEscuchados = [
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
   
  ];

  const artistasFavoritos = [
    {
      titulo: 'Where the Light Is: John Mayer Live in Los Angeles',
      descripcion: 'John Mayer',
      imagenSrc: 'https://static.fnac-static.com/multimedia/Images/FR/NR/0d/54/33/3363853/1507-1/tsp20190620103438/Where-the-light-is-John-Mayer-live-in-Los-Angeles.jpg',
    },
    {
      titulo: 'BZRP Music Sessions #30',
      descripcion: 'Bizarrap y Homer El Mero Mero',
      imagenSrc: 'https://i1.sndcdn.com/artworks-68DHJOtPIluR-0-t500x500.jpg',
    },
    {
      titulo: 'TERRAZA',
      descripcion: 'WOS',
      imagenSrc: 'https://m.media-amazon.com/images/I/71IYz+DOqJL._SS500_.jpg',
    },
    {
      titulo: 'Zafar',
      descripcion: 'La Vela Puerca',
      imagenSrc: 'https://i1.sndcdn.com/artworks-yrfnMvLQUuzB-0-t500x500.jpg',
    },
    {
      titulo: 'Crudo ',
      descripcion: 'Acru',
      imagenSrc: 'https://images.genius.com/f94978714bfd4f2851ec4dfabbcf1496.1000x1000x1.jpg',
    },
    {
      titulo: 'Panasonic y el mundo a sus pies',
      descripcion: 'Los Fundamentalistas del Aire Acondicionado',
      imagenSrc: 'https://www.cmtv.com.ar/tapas-cd/0956133001595626861.webp',
    },
    {
      titulo: 'El viejo de Arriba',
      descripcion: 'Bersuit Vergarabat',
      imagenSrc: 'https://i.discogs.com/cEl5AGomxMSPpilAwTufvzz-uD4mSclNjwhiZEiZS3M/rs:fit/g:sm/q:90/h:588/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MjI4/MTY0LTE2NjA3NDAy/NDYtMzI0OC5qcGVn.jpeg',
    },
   
  ];

  const tendencia = [
    {
      titulo: 'GTA.mp3',
      descripcion: 'Emilia',
      imagenSrc: 'https://ak47full.com/wp-content/uploads/2023/09/GTA.jpg',
    },
    {
      titulo: 'Guts ',
      descripcion: 'Olivia Rodrigo',
      imagenSrc: 'https://static.stereogum.com/uploads/2023/09/olivia-rodrigo-guts-album-art-1687796050-1694126518.jpg',
    },
    {
      titulo: 'VISTA AL MAR',
      descripcion: 'Quevedo',
      imagenSrc: 'https://i.scdn.co/image/ab67616d00001e02efc1b8f6beda4abe848a84e0',
    },
    {
      titulo: 'Luna ',
      descripcion: 'Peso Pluma',
      imagenSrc: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Peso_Pluma_-_Genesis.png',
    },
    {
      titulo: 'Una Opcion ',
      descripcion: 'C.R.O',
      imagenSrc: 'https://akamai.sscdn.co/uploadfile/letras/albuns/a/b/a/a/1808891685706733.jpg',
    },
    {
      titulo: 'baby BOO',
      descripcion: 'Rels B',
      imagenSrc: 'https://www.lahiguera.net/musicalia/artistas/rels_b/disco/13011/rels_b_afrolova_23-portada.jpg',
    },
    {
      titulo: 'Los del espacio',
      descripcion: 'Lit Killah',
      imagenSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/a7/1e/6ca71e6d-4f6e-2ee9-3460-9f4bb79b678c/5054197661600.jpg/1200x1200bf-60.jpg',
    },
   
  ];

  const paraTi = [
    {
      titulo: 'Angry',
      descripcion: 'The Rolling Stones',
      imagenSrc: 'https://upload.wikimedia.org/wikipedia/en/0/0f/The_Rolling_Stones_-_Angry.png',
    },
    {
      titulo: 'CORAZON VACIO ',
      descripcion: 'Maria Becerra',
      imagenSrc: 'https://images.genius.com/9527b88c6547ddd82bebbeb05566ae87.1000x1000x1.jpg',
    },
    {
      titulo: 'Nostálgico',
      descripcion: 'Rauw Alejandro',
      imagenSrc: 'https://images.genius.com/17505acda193eae0a3a0d90b5dfd5515.1000x1000x1.png',
    },
    {
      titulo: 'Normal ',
      descripcion: 'Feid',
      imagenSrc: 'https://images.genius.com/4d31ad179cd2b577f133cbb0287af431.1000x1000x1.png',
    },
    {
      titulo: 'Cinco ',
      descripcion: 'El Natty Combo',
      imagenSrc: 'https://i.scdn.co/image/ab67616d00001e022649251e0a2ba0111774403c',
    },
    {
      titulo: 'Tres Marias',
      descripcion: 'Andres Calamaro',
      imagenSrc: 'https://i.scdn.co/image/ab67616d0000b27399776a6a69e74e28c06e367b',
    },
    {
      titulo: 'Ama a quien llora por ti',
      descripcion: 'Las Pastillas del Abuelo',
      imagenSrc: 'https://www.cmtv.com.ar/tapas-cd/0667554001674225907.webp',
    },
   
  ];

  const rockNacional = [
    {
      titulo: 'Autodestruccion',
      descripcion: 'La Mono',
      imagenSrc: 'https://i.scdn.co/image/ab67616d0000b27317ad1629ea24756173293e1f',
    },
    {
      titulo: 'Cicatrices ',
      descripcion: 'Airbag',
      imagenSrc: 'https://cdns-images.dzcdn.net/images/cover/bdb5671e51d849226938b3db7f2975ad/264x264.jpg',
    },
    {
      titulo: 'Agua de Rio',
      descripcion: 'Gustavo Cordera',
      imagenSrc: 'https://lastfm.freetls.fastly.net/i/u/300x300/d59ddd98aba8f3b5a57e056d5d341cfa.jpg',
    },
    {
      titulo: 'Flores ',
      descripcion: 'Barrio Viejo',
      imagenSrc: 'https://cdns-images.dzcdn.net/images/cover/54b2df72975424b25a7793dab66aa203/264x264.jpg',
    },
    {
      titulo: 'Mi genio amor ',
      descripcion: 'Los Fundamentalistas del Aire Acondicionado',
      imagenSrc: 'https://i.scdn.co/image/ab67616d0000b27322407b4ba61786779c49d3dc',
    },
    {
      titulo: 'Por la Carretera',
      descripcion: 'C.R.O',
      imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGd3mexsK6UVKhYL_Tq88UZRKZDCE8-TTIEb0A_EDfxf6ktXpD9tK7UXq776_vcLDF8Y&usqp=CAU',
    },
    {
      titulo: 'ñam fri fru fali fru',
      descripcion: 'Patricio Rey y sus Redonditos de Ricota',
      imagenSrc: 'https://images.genius.com/ddfd5892dc45a740033504bed81b0ff3.953x953x1.jpg',
    },
   
  ];

  const Arista = [
    {
      titulo: 'This is John Mayer ',
      descripcion: 'This is John Mayer.Los temas escensiales, todos en una lista.',
      imagenSrc: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO068TsY-default.jpg',
    },
    {
      titulo: 'This is Justin Bieber ',
      descripcion: 'This is Justin Bieber.Los temas escensiales, todos en una lista.',
      imagenSrc: 'https://i.scdn.co/image/ab67706f000000029cf2e21a96f217de5d3abf60',
    },
    {
      titulo: 'This is Indio Solari',
      descripcion: 'This is Indio Solari.Los temas escensiales, todos en una lista.',
      imagenSrc: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO09UD2o-default.jpg',
    },
    {
      titulo: 'This is Duki',
      descripcion: 'This is Duki.Los temas escensiales, todos en una lista.',
      imagenSrc: 'https://i.scdn.co/image/ab67706f00000002e28083d6dd937243ad67b49e',
    },
    {
      titulo: 'This is Once Tiros',
      descripcion: 'This is Once Tiros.Los temas escensiales, todos en una lista.',
      imagenSrc: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO4rZn5C-default.jpg',
    },
    {
      titulo: 'This is The Rolling Stones' ,
      descripcion: 'This is The Rolling Stones.Los temas escensiales, todos en una lista.',
      imagenSrc: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO19s0CZ-default.jpg',
    },
    {
      titulo: 'This is Green Day',
      descripcion: 'This is Green Day.Los temas escensiales, todos en una lista.',
      imagenSrc: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO4nBpII-default.jpg',
    },
   
  ];
  const podcast = [
    {
      titulo: 'Aislados El Podcast ',
      descripcion: 'Aislados El Podcast ',
      imagenSrc: 'https://i.scdn.co/image/ab6765630000ba8a449b5ce6ae1c597120d71d5e',
    },
    {
      titulo: 'Los cuentos de Mario Pergolini',
      descripcion: 'vorterix.com',
      imagenSrc: 'https://i.scdn.co/image/ab6765630000ba8a6adcf9e9f4417c72432d6571',
    },
    {
      titulo: 'Dante Gebel',
      descripcion: 'Dante Gebel',
      imagenSrc: 'https://i.scdn.co/image/ab6765630000ba8a5923d8c04c61d3a4a1764243',
    },
    {
      titulo: 'Musica Para Pastillas',
      descripcion: 'vorterix.com',
      imagenSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcfuiFk9_wXmVD7dVjrNOe99F9W1GmOpyAiLxNBMdKolfxK06f4LQqdDUTy8M2PRMTzU&usqp=CAU',
    },
    {
      titulo: 'Caja Negra',
      descripcion: 'filo.news',
      imagenSrc: 'https://i.scdn.co/image/ab6765630000ba8a117078e2b28cc4bee3cbb5f9',
    },
    {
      titulo: 'La Cruda' ,
      descripcion: 'Spotify Studios',
      imagenSrc: 'https://i.scdn.co/image/ab6765630000ba8a43d6ba476d8c8b8347e736e0',
    },
    {
      titulo: 'Paren La Mano',
      descripcion: 'Vorterix',
      imagenSrc: 'https://i.scdn.co/image/ab6765630000ba8a51aa548e1f7387e65f37ff8a',
    },
   
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

           <ListAlbums cardsData={ masEscuchados } titulos= "Escuchados Recientemente"></ListAlbums>
           <ListAlbums cardsData={ artistasFavoritos } titulos= "Tus artistas favoritos"></ListAlbums>
           <ListAlbums cardsData={ podcast } titulos= "Episodios para ti"></ListAlbums>
           <ListAlbums cardsData={ Arista } titulos= "Lo mejor de cada artista"></ListAlbums>
           <ListAlbums cardsData={ tendencia } titulos= "En tendendicia"></ListAlbums>
           <ListAlbums cardsData={ paraTi } titulos= "Novedades para ti"></ListAlbums>
           <ListAlbums cardsData={ rockNacional } titulos= "Rock nacional"></ListAlbums>
          
         

          </div>
          
        
              
      </div>
    </>
    
  )
}
