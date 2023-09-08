import React from 'react' ;
import Link from "next/link" ;

const ListAlbums = ( props ) => {

    const { title , albums} = props ;

  return (
    
    <div> 
        <div className='flex items-center justify-between'>
            <Link href="/"> {props.title} </Link>
            <Link href="/"> VER TODO </Link>
        </div>
        
    </div>
  ) ;
} ;


export default ListAlbums ;