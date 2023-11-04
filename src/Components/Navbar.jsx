import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '/src/assets/Union.png'
export default function Navbar() {
     const [nav, setNav] = useState(false)
        const handelNav = () =>  {
            setNav(!nav)
        }
  return (
     <>
        <nav className='flex justify-between md:px-0 px-6  md:justify-around py-4 items-center'>
                   <div className='text-2xl items-center flex font-extrabold gap-1'>
                      <img src={logo}  />AM
                      </div>
                    <ul className=" hidden md:flex gap-7 capitalize font-semibold">
                    <a href="#">
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>home
                     </a>
                    <a href="#">
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>about-me
                     </a>
                    <a href="#">
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>works
                     </a>
                    <a href="#">
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>contact
                     </a>
             </ul>
             <div className=' md:hidden flex text-2xl mt-3 ' onClick={handelNav}>
                   {nav ? <AiOutlineClose/> : <FiMenu/>}
             </div>

             
                    <ul className={nav ? "sm:hidden capitalize border-r border-gray-200 flex p-4 flex-col w-[60%] fixed left-0 top-0 h-screen bg-slate-900 ease-in-out duration-300" : "left-[-200%] fixed"} >
                     <div className='text-3xl items-center flex font-extrabold gap-1 '> 
                     <img src={logo}  className='h-6' />AM
                     </div>
                    <a href="#" className='p-3 hover:text-cyan-400 font-bold text-xl'>
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>home
                    </a>
                    <a href="#" className='p-3 hover:text-cyan-400 font-bold text-xl'>
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>about-me
                     </a>
                    <a href="#" className='p-3 hover:text-cyan-400 font-bold text-xl'>
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>works
                     </a>
                    <a href="#" className='p-3 hover:text-cyan-400 font-bold text-xl'>
                     <span className=" text-purple-500 mr-0.5 text-xl">#</span>contact
                     </a>
             </ul>
        </nav>
     </>
  )
}