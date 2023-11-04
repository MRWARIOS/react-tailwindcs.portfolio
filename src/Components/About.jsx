
import about from '/src/assets/about.png'
export default function About() {
  return (
    <>
          <section className="py-20 px-5">
          <span className="flex justify-around text-xl items-center">
                 <h2 className=' font-semibold capitalize text-3xl'><span className='text-purple-500'>#</span>About-me</h2>
                      <div className="h-2 border-t-4 border-dotted border-purple-400 w-20 md:w-96 mt-3"></div>
               </span>
               <span className=" block md:flex  justify-around  gap-8 items-center">
                    <div className="flex flex-col gap-6  text-xl">
                        <h2>Hello, i’m AM!</h2>
                          <p>
                          I’m a self-taught front-end developer based in Kyiv, <br />
                           Ukraine. I can develop responsive websites from scratch <br />
                            and raise them into modern user-friendly web experiences. 
                          </p>
                          <p>
                          Transforming my creativity and knowledge into a websites has <br />
                           been my passion for over a year. I have been helping various clients <br />
                            to establish their presence online. I always strive to learn about  <br />
                            the newest technologies and frameworks.
                          </p>
                          <button className='border border-purple-400 py-3 w-40'>
                          Read more ->
                          </button>
                    </div>
                    <div className=' flex items-center justify-center'>
                           <img src={about}/>
                    </div> 
                   </span>
          </section>
    </>
  )
}
