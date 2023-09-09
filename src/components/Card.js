import React from 'react' ;
import Image from 'next/image';
import Album1 from "../../public/portada1.jpg"
import Link from 'next/link' ;
import { RiPlayFill } from 'react-icons/ri';

const Card = () => {
  return (
    <Link href="/" className='bg-spotify-lightgray rounded-lg p-4 hover:bg-spotify-lightgrayHover transition-all group'>
        <div className='mb-4 relative'>
            <Image src={ Album1 } widht={200} height={350} alt="" className='rounded drop-shadow-2xl mx-auto' />
            <button className='p-2 text-3xl bg-spotify-green rounded-full text-spotify-gray absolute right-4 bottom-4 opacity-0 
            group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'> 
                <RiPlayFill /> 
            </button>
        </div>
        <div>
            <h5 className='font-medium text-gray-100 mb-2'>El Tesoso de los inocentes</h5>
            <p className='text-sm text-gray-400 w-[18ch]'> SZA is on top of the Hottest 50!</p>
        </div>
    </Link>
  )
}

export default Card ;