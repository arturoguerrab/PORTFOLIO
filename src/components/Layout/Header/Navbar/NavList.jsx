import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'

const NavList = () => {
    return (
        <ul className="sm:w-10/12 mx-auto px-4 pb-4 pt-2 md:pb-0 md:pt-0 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:justify-between">
            <NavLink to='/about'><NavItem nombre={'About'}/></NavLink>
            <NavLink to='/projects'><NavItem nombre={'Projects'}/></NavLink>
            <NavLink to='/contact'><NavItem nombre={'Contact'}/></NavLink>
        </ul>
    )
}

export default NavList