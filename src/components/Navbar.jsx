import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
//  import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const Click = () => setNav(!nav)

    return (
        //navbar div 
        <div className=' w-full p-[20px]  bg-[#0a192f] text-gray-300 flex justify-between items-center px-4 z-10'>
            {/* heading / image  */}
            <div>
                <h1>Yatra</h1>
            </div>

            {/* list */}
            <ul className='md:flex hidden'>
                 <li>
                    <a href='/'>Home</a>
                </li>
               <li>
                <a href='/about'>About Us</a>
               </li>
               <li>
                <a href='/blog'>Blogs</a>
               </li>
                <li>
                    <a href='/dest'>Destination</a>
                </li>
               <li>
                <a href='/contact'>Contact Us</a>
               </li>
            </ul>

            {/* if nav true xa bhne/ md xa bhne bar aaoune ani close hune */}
            <div onClick={Click} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* nav true xa bhne hide garne natra bars ko list haru */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center'}>
                <li className='text-4xl py-6'>Home</li>
                <li className='text-4xl py-6'>About us</li>
                <li className='text-4xl py-6'>Blogs</li>
                <li className='text-4xl py-6'>Destination</li>
                <li className='text-4xl py-6'>contact</li>
            </ul>
        </div>
    )
}
export default Navbar
