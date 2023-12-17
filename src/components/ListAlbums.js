import React from 'react' ;
import Link from "next/link" ;
import Card from './Card';


const ListAlbums = ( props ) => {

    const { title , albums , cardsData , titulos} = props ;
 

  return (
    
    <div className='mb-8'> 
    
        <div className='flex items-center justify-between mb-8'>
            <Link href="/" className='text-2xl font-bold text-gray-200 hover:underline'> { props.titulos } </Link>
            <Link href="/" className='text-sm font-bold tracking-[2px] hover:underline'> VER TODO </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>

        {  
        Array.isArray(cardsData) ? (
          cardsData.map((card, index) => (
            <Card 
              key={index} 
              titulo={card.titulo}
              descripcion={card.descripcion}
              imagenSrc={card.imagenSrc}
            />
          ))
        ) : (
          <p>No hay datos de tarjetas disponibles...</p>
        )}     
     
        </div>
        
    </div>
  ) ;
} ;


export default ListAlbums ;