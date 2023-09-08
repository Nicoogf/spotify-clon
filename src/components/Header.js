import React from 'react' ;

import Link from "next/link" ;
import { RiMore2Fill , RiArrowLeftSLine , RiArrowRightSLine} from "react-icons/ri" ;

const Header = ( props ) => {

  const { setShowSidebar  }  = props ;


  return (
    <header className='fixed left-0 top-0 w-full md:ml-64 md:w-[calc(100%-256px)] bg-spotify-lightgray flex items-center justify-between p-4'>

      <div className='md:hidden'>

      <RiMore2Fill onClick={() => setShowSidebar(true)} 
       className='text-2xl hover:cursor-pointer p-2 box-content '/>

      </div>

      <div className='hidden md:flex items-center text-3xl '>
              <RiArrowLeftSLine className='p-2 box-content cursor-pointer'/>
              <RiArrowRightSLine className='p-2 box-content cursor-pointer'/>
      </div>

      <div className='flex items-center gap-6'>
        <Link href="#" className='hover:text-white transition-colors'>Registrate</Link>
        <Link href="#" className='py-2 md:py-3 px-4  rounded-full bg-white text-spotify-gray font-medium hover:scale-105 transition-transform'>Iniciar Sesion</Link>
      </div>

    </header>
  ) ;
} ;

export default Header ; 
