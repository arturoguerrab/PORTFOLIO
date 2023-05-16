import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link className='col-span-4 md:col-span-2' to='/'><div  className='text-center text-[#1a2026] dark:text-[#f2f2f2]'>Arturo Guerra</div></Link>
  )
}
export default Logo