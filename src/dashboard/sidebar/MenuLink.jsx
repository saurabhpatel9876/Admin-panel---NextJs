
import Link from 'next/link'
import React from 'react'

const MenuLink = ({item}) => {
  return (

    <Link className=' hover:bg-slate-400' href={item.path}>{item.icon}
    {item.title}
    </Link>
 
  
  )
}

export default MenuLink