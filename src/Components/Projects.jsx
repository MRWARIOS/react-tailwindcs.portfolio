import item1 from '/src/assets/item1.jpg'
import item2 from '/src/assets/item2.png'
import item3 from '/src/assets/item3.png'
export default  function Projects() {
  return (
    <>
         <section className="py-20 flex flex-col ">
               <span className="flex justify-around text-xl items-center">
                 <h2 className='text-xl font-semibold'><span className='text-purple-500'>#</span>Projects</h2>
                      <div className="h-2 border-t-4 border-dotted border-purple-400 w-20 md:w-96 mt-3"></div>
                      <a href="#">View all ~~></a>
               </span>
               <div className=' flex justify-around'>
               <span className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mt-20 pb-5'>
                                   <div className='border-2 border-gray-500'>
                                         <img src={item1}/>
                                          <ul className='flex  py-2 items-center gap-5 justify-center uppercase font-bold border-b border-gray-500'>
                                            <li>html</li>
                                            <li>scss</li>
                                            <li>python</li>
                                            <li>flask</li>
                                          </ul>
                                          <h2 className='pl-7 font-semibold capitalize py-3 text-2xl'>ChertNodes</h2>
                                          <p  className='pl-7 font-semibold capitalize '>Minecraft servers hosting </p>
                                           <span  className='px-7 py-6'>
                                               <button className='py-1 my-3  px-5  border-2 border-purple-500'>Live </button>
                                               <button className='py-1 my-3 ml-3  px-6  border-2 '>Cached </button>
                                           </span>
                                   </div>

                                   <div className='border-2 border-gray-500'>
                                         <img src={item2}/>
                                          <ul className='flex  py-2 items-center gap-2 justify-center uppercase font-bold border-b border-gray-500'>
                                            <li>React</li>
                                            <li>Express</li>
                                            <li>Discord.js</li>
                                            <li>Node.js</li>
                                          </ul>
                                          <h2 className='pl-7 font-semibold capitalize py-3 text-2xl'>ProtectX</h2>
                                          <p  className='pl-7 font-semibold capitalize '>Discord anti-crash bot</p>
                                           <span  className='px-7 py-6'>
                                               <button className='py-1 my-3  px-5  border-2 border-purple-500'>Live </button>
                                           </span>
                                   </div>

                                   <div className='border-2 border-gray-500'>
                                         <img src={item3}/>
                                          <ul className='flex  py-2 items-center gap-5 justify-center uppercase font-bold border-b border-gray-500'>
                                            <li>CSS</li>
                                            <li>Express</li>
                                            <li>Node.js</li>
                                          </ul>
                                          <h2 className='pl-7 font-semibold capitalize py-3 text-2xl'>Kahoot Answers Viewer</h2>
                                          <p  className='pl-7 font-semibold capitalize '>Get answers to your kahoot quiz </p>
                                           <span  className='px-7 py-6'>
                                               <button className='py-1 my-3  px-5  border-2 border-purple-500'>Live </button>
                                           </span>
                                   </div>
                             </span> 
                               </div>
         </section>
    </>
  )
}
