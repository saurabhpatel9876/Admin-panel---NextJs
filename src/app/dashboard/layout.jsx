
import Navbar from '@/dashboard/Navbar'
import Sidebar from '@/dashboard/sidebar/Sidebar'
import React from 'react'

const Layout = ({children}) => {
  return (<>
  <div className='flex ' >
  <div className='bg-softCol text-white h-screen p-[20px] '>
    <Sidebar />
  </div>
  <div className=' p-[20px] bg-softCol text-white h-28 min-w-full m-3 '>
    <Navbar/>
    {children}
  </div>
  </div>
  </>
  )
}

export default Layout