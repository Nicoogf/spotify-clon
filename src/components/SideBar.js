import React  from 'react' ;
import Link from "next/link" ;
import Image from 'next/image';
import { RiHome4Fill , RiSearchLine ,RiFoldersLine  , RiAddBoxLine , RiHeartFill , RiCloseLine} from "react-icons/ri" 

export default function SideBar( props ) {

  const { showSidebar , setShowSidebar} = props ;
 
  return (
    <div className={`bg-black fixed top-0  w-64 h-full p-6 flex flex-col justify-between 
        ${ showSidebar ? 'left-0' : '-left-full'}  md:left-0 transition-all duration-300`}>

      <div className='md:hidden absolute right-4 top-4 '>
         <RiCloseLine onClick={ () => setShowSidebar( false )} className='text-2xl p-2 box-content cursor-pointer'/>
      </div>        

      <div>
        <div className='mt-4 mb-8'>
          <Image 
          src="https://assets.stickpng.com/images/59b5bb466dbe923c39853e00.png" 
          alt ="Spotify Logo"
          width={130}
          height={130}/>          
        </div>
        <nav>
          <ul className='flex flex-col gap-y-2'>

            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-100 transition-colors'> 
                <RiHome4Fill  className='text-2xl'/> Inicio 
              </Link>
            </li>

            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-100 transition-colors'> 
                <RiSearchLine  className='text-2xl'/> Buscar 
              </Link>
            </li>

            <li className='mb-8'>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-100 transition-colors'> 
                <RiFoldersLine  className='text-2xl'/> Tu Biblioteca 
              </Link>
            </li>

            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-100 transition-colors'> 
                <RiAddBoxLine  className='text-2xl'/> Crear Playlist
              </Link>
            </li>

            <li>
              <Link href='#' className='flex items-center gap-4 hover:text-gray-100 transition-colors'> 
                <RiHeartFill  className='text-2xl'/> Tus me gusta
              </Link>
            </li>

          </ul>
        </nav>
      </div>

      <div>
        <nav>
          <ul className='flex flex-col gap-y-2'>
            <li> 
              <Link href="#"className='text-xs hover:underline'>Cookies</Link>
            </li>
            <li> 
              <Link href="#"className='text-xs hover:underline'>Privacidad</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
