import React, { useState } from 'react'

function useCounter (){
    const[count,setCount] = useState(0)
    function handleClick(){
    setCount(c => c+1)
    }

    return {
        count : count,
        handleClick: handleClick
    }
}

function CustomHook() {
  

    return (
  
<div>
    <S/>
    <S/>
    <S/>
    <S/>
</div>
  )
}


function S (){
const {count , handleClick}= useCounter()
    return <div>
        
    <div>
        <button onClick={handleClick}>{count}</button>
    </div>
    </div>
}


export default CustomHook