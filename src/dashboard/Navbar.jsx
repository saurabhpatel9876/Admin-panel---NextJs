"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname()
  return (<>
    <div className='p-[20px] flex flex-row justify-between '>
      <div className=''>{pathname.split("/").pop()}</div>
      <div className='flex items-center '>
        
          <input type="text" placeholder="Search..." className=' ' />
       
        <div className='flex '>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar