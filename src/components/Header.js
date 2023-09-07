import React from 'react' ;
import { RiMore2Fill } from "react-icons/ri" ;

const Header = () => {
  return (
    <header className='ml-64 md:w-[calc(100%-256px)] bg-spotify-lightgray flex items-center justify-between p-4'>
      <div>
        <RiMore2Fill />
      </div>
      <div>Botones</div>
    </header>
  ) ;
} ;

export default Header ; 
