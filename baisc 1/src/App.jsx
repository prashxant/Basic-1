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



  return (
    <>
    <h1>{count}</h1>
    <button onClick={increaseCounter}>Increase Counter</button>
    </>
  )
}

export default App
