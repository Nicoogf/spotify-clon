import React from 'react' ;
import Link from "next/link" ;
import Card from './Card';


const ListAlbums = ( props ) => {

    const { title , albums} = props ;

  return (
    
    <div className='mb-8'> 
        <div className='flex items-center justify-between mb-8'>
            <Link href="/" className='text-2xl font-bold text-gray-200 hover:underline'> { title } </Link>
            <Link href="/" className='text-sm font-bold tracking-[2px] hover:underline'> VER TODO </Link>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            
        </div>
        
    </div>
  ) ;
} ;


export default ListAlbums ;