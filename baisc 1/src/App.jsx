import { useState } from "react";


function App() {

  return (
    <>
    <b>Hi There </b>
    <Counter></Counter>

    </>
  )
}





function Counter (){

  const [count,setCount] = useState(0)


    function increaseCounter(){
        setCount(count + 1 )
    }

function decreaseCounter(){
  setCount(count - 1 )
}

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increaseCounter}>Increase Counter</button>
    <button onClick={decreaseCounter}>Decrease Counter</button>
    </>
  )
}

export default App
