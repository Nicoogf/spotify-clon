import React from 'react' ;
import Image from 'next/image';

export default function SideBar() {
  return (
    <div className='bg-black fixed top-0 left-0 w-64 h-full p-4'>
      <div>
        <div className='mt-4'>
          <Image 
          src="https://assets.stickpng.com/images/59b5bb466dbe923c39853e00.png" 
          alt ="Spotify Logo"
          width={130}
          height={130}/>          
        </div>
      </div>
    </div>
  )
}
