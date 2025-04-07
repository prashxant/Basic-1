import React, { useState } from 'react'

function useCounter(){

    const [count,setCount] = useState(0)

function increaseCount(){
    setCount(count + 1)
}
return {
    count : count,
    increaseCount : increaseCount
}


}




function CustomHook() {
    const {count,increaseCount} = useCounter()
    
  return (
    <div>
        <button onClick={increaseCount}>{count}</button>
    </div>
  )
}

export default CustomHook