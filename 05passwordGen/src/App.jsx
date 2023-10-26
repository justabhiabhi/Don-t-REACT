import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useref hook variable
  const passwordRef=useRef(null)

  //useCallback hook function, memorise karta hai jitna ho sake
  const passwordGen=useCallback( ()=>{ 
    let pass="" ; 
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    if (numAllow) {
    str+="0123456789";
    }
    if (charAllow) {
    str+="!@#$%^&*_+|:?/.,';=-";
    }

    for (let i = 1; i <= length; i++) {

      //ye char variable is basically a random index from the str and vo usko selected karega randomly, basically ek random character select karega str me se
      let char=Math.floor(Math.random()*str.length+1);

      //ye pass variable me usko add karega, matlab pass variable me ek ek karke character add karega aur length tak chalega
      pass+=str.charAt(char);
}
setPassword(pass)
}, [length, numAllow, charAllow, setPassword])//this is for optimisation

const copyPasswordToClipboard=useCallback(()=>{
  //? means optional selection, if passwordRef.current is null then it will not throw an error
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 25)
  window.navigator.clipboard.writeText(passwordRef.current.value)
}, [password])

//jab bhi page load hota hai toh useEffect call hota hai
//dependancy array me kuch bhi changes hue toh ye useEffect call hoga firse, RERUN
//never compare the callback and useEffect dependencies(array), because callback is a function and useEffect is a hook, so they are not same
useEffect(() => {
  passwordGen()
}, [length, numAllow, charAllow, passwordGen])//this is for any change in the length, numAllow, charAllow, passwordGen and generate a new password

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-black'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input ref={passwordRef} type="text" value={password} className='outline-none w-full py-1 px-3' placeholder="Password" readOnly/>
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-1 '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={25} value={length} className='cursor-pointer'onChange={(e)=>{setLength(e.target.value)}}/>
          <label >Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllow}
          id="numberInput"
          onChange={()=>{
            setNumAllow((prev)=>!prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllow}
          id="charInput"
          onChange={()=>{
            setCharAllow((prev)=>!prev)
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
