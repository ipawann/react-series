import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useREF HOOK 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&+=[]{}"

    for (let i = 1; i <= length; i++) {
      let char  = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])


  useEffect( () => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed, passwordGenerator])

  //useref method
  const copyPasswordToClipboard = useCallback( () =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full h-auto max-w-md mx-auto shadow-md rounded-lg px-4 my-8
       text-orange-500 bg-gray-700 text-center pt-3 pb-3.5
      '>
        <h1 className='text-white text-center my-3 text-2xl italic'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden bg-white'>
          <input 
              type="text" 
              value={password}
              className='outline-none w-full py-1 px-3 text-gray-600'
              placeholder='Password'
              readOnly
              ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2 pt-2.5 pb-2.5'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label > Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
                type="checkbox"
                defaultChecked = {numberAllowed}
                id= "numberInput"
                onChange={ () => {
                  setNumberAllowed((prev) => !prev);
                }}
            />
            <label > Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
