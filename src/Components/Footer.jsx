import { BiLogoDiscordAlt } from 'react-icons/bi'
import { BiLogoFigma } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'
import logo from '/src/assets/Union.png'
export default function Footer() {
  return (
    <>
           <footer className='py-10 border-t-2 border-gray-900'>
                 <span className='flex justify-around mb-5'>
                         <div className='flex flex-col gap-4'>
                                <span className='flex gap-10'>
                                    <div className='flex gap-1 items-center'>
                                        <img src={logo}/>
                                         AM
                                    </div>
                                    AM@elias-dev.ml
                                </span> 
                                <p>
                                Web designer and front-end developer
                                </p>
                         </div>
                        <div className=' capitalize font-semibold text-2xl text-center'>
                               <h2 className='mb-3'>media</h2>
                                   <ul className='flex gap-4'>
                                      <BiLogoDiscordAlt/>
                                      <BiLogoFigma/>
                                      <IoMdMail/>
                                   </ul>
                        </div>
                 </span>
               <p className='text-center '>
                   © Copyright 2022. Made by AM
               </p>
           </footer>
    </>
  )
}