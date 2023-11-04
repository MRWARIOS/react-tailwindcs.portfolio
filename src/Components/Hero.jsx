
import './Hero.css'
import heroImg from '/src/assets/hero.png'
export default function Hero() {
  return (
      <>
      <section className='hero'> 
                <div className=' gap-4 w-1/2  flex flex-col md:items-start items-center'>
                    <h1 className='text-6xl mb-4 capitalize font-semibold'>
                        Elias is a <span className=' text-purple-400'> web designer </span>
                       <br /> and   <span  className=' text-purple-400'> front-end developer </span> 
                   </h1>
                   <p className=' text-xl font-bold'>
                     He crafts responsive websites where technologies meet creativity
                   </p>
                   <button className=" py-1 px-5 border-2 mt-3 border-purple-600">
                      Contact me !!
                   </button>
                </div>
                   <div className='flex flex-col justify-center   items-center capitalize  '>
                       <img src={heroImg} alt="" />
                         <p className='flex items-center gap-1 text-xl font-bold py-1 px-11 border md:w-auto w-72 text-center border-purple-400'>
                         <div className=' h-4 w-4 md:flex hidden  bg-purple-400 rounded-lg'></div>
                             Currently working on Portfolio
                         </p>
                   </div>
            </section>
            <p className=' text-center mt-20  uppercase font-semibold border border-purple-400 py-2 mx-4 md:mx-40 '>
             <span className='text-4xl'>  With great power comes great electricity bill </span> 
               <span className='text-md  text-purple-400'>
                 "Dr. Who"
               </span>
            </p>
      </>
  )
}