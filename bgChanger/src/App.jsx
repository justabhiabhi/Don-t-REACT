import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen " style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-9 shadow-lg bg-white px-9 py-2.5 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "red"}}>RED</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "green"}}>GREEN</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "blue"}}>BLUE</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "black"}}>BLACK</button>
          <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black' style={{backgroundColor: "yellow"}}>YELLOW</button>
          <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "olive"}}>OLIVE</button>
          <button onClick={()=>setColor("grey")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "grey"}}>GREY</button>
          </div>
      </div>
    </div>
  )
}

export default App
