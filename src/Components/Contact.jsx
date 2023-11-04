
 import { BiLogoDiscordAlt } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'
export default  function Contact() {
  return (
    <>
       <section className="flex flex-col gap-28 py-20">
       <span className="flex justify-around items-center  ">
                <h2 className="text-2xl font-semibold ">
                  <span className="text-purple-500  ">#</span>Contact-me</h2>
                  <div className=" h-2 w-44 border-dotted border-t-4 mt-3 border-purple-500"></div>
            </span>
            <span className=" md:flex  block justify-around p-4  w-full">
                  <p className=' '>
                  I&apos;m interested in freelance opportunities. However, <br />
                   if you have other request or question, don&apos;t <br /> hesitate to contact me
                  </p>
                  <span className="border border-dotted border-gray-600 p-2">
                       <h2 className='border-b-4 border-dotted font-semibold text-xl p-2 border-gray-600'>Message me here</h2>
                           
                       <div className='p-2 flex flex-col '>
                           <p className='flex gap-2 items-center font-semibold text-xl'>
                              <BiLogoDiscordAlt className='text-3xl'/>
                              !Elias#3519
                              </p> 
                              
                              <p className='flex gap-2 items-center font-semibold text-xl'>
                              <IoMdMail className='text-2xl'/>
                                elias@elias.me
                              </p> 
                              
                           </div>
                  </span>
            </span>
       </section>
    </>
  )
}
