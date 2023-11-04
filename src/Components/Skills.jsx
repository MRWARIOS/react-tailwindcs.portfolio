
export default function Skills() {
  return (
    <>
          <section className="py-20 flex flex-col ">
            <span className="flex justify-around items-center ">
                <h2 className="text-2xl font-semibold ">
                  <span className="text-purple-500  ">#</span> skills</h2>
                  <div className=" h-2 w-44 border-dotted border-t-4 mt-3 border-purple-500"></div>
            </span>
            <div className=" flex justify-around ">
                <span  className=" grid lg:grid-cols-5 mt-20 md:grid-cols-3 grid-cols-2  gap-6 px-5">
                 <div className="border border-gray-500">
                         <h2 className="text-center p-4 border-b-2 border-dotted border-gray-600 text-xl font-semibold uppercase">Languages</h2>
                         <ul className=" grid grid-cols-2 p-5">
                              <li className="p-1">TypeScript</li>
                              <li className="p-1">Lua</li>
                              <li className="p-1">Python</li>
                              <li className="p-1">JavaScript</li>
                         </ul>
                 </div>

                 <div className="border border-gray-500">
                         <h2 className="text-center p-4 border-b-2 border-dotted border-gray-600 text-xl font-semibold uppercase">Databases</h2>
                         <ul className=" grid grid-cols-2 p-5">
                              <li className="p-1">SQLite</li>
                              <li className="p-1">PostgreSQL</li>
                              <li className="p-1">Mongo</li>
                         </ul>
                 </div>

                 <div className="border border-gray-500">
                         <h2 className="text-center p-4 border-b-2 border-dotted border-gray-600 text-xl font-semibold uppercase">Tools</h2>
                         <ul className=" grid grid-cols-2 p-5">
                              <li className="p-1">VSCode</li>
                              <li className="p-1">Neovim</li>
                              <li className="p-1">Linux</li>
                              <li className="p-1">Figma</li>
                              <li className="p-1">XFCE</li>
                              <li className="p-1">Arch</li>
                              <li className="p-1">Git</li>
                              <li className="p-1">Font Awesome</li>
                         </ul>
                 </div>

                 <div className="border border-gray-500">
                         <h2 className="text-center p-4 border-b-2 border-dotted border-gray-600 text-xl font-semibold uppercase">Other</h2>
                         <ul className=" grid grid-cols-2 p-5">
                              <li className="p-1">HTML</li>
                              <li className="p-1">CSS</li>
                              <li className="p-1">EJS</li>
                              <li className="p-1">SCSS</li>
                              <li className="p-1">REST</li>
                              <li className="p-1">Jinja</li>
                         </ul>
                 </div>

                 <div className="border border-gray-500">
                         <h2 className="text-center p-4 border-b-2 border-dotted border-gray-600 text-xl font-semibold uppercase">Frameworks</h2>
                         <ul className=" grid grid-cols-2 p-5">
                              <li className="p-1">React</li>
                              <li className="p-1">Vue</li>
                              <li className="p-1">Disnake</li>
                              <li className="p-1">Discord.js</li>
                              <li className="p-1">Flask</li>
                              <li className="p-1">Express.js</li>
                         </ul>
                 </div>
             </span>
            </div>
             

          </section>
    </>
  )
}
