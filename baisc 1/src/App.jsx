import { useState } from "react";


function App() {

  return (
    <div style={{display:"flex", justifyContent:"center" , marginTop:"20vh"}} >
      
      <Counter/>
    </div>
  )
}



function Counter (){

  const [count, setCount] = useState(0);
  
    function increaseCount(){
      return setCount(count + 1) 
      }
    function decreaseCount(){
      return setCount(count - 1) 
      }
      function reset(){
        return setCount( 0) 
        }
      
return(
  <div>
    <h1>
      {count}
    </h1>
    <button onClick={decreaseCount}>Decrease count</button>
    <button style={ { margin:"1vw"}} onClick={reset}>Reset count</button>
    <button onClick={increaseCount}>Increase count</button>
    </div>
)

}




export default App
