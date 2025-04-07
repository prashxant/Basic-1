import React, { useState } from 'react';
import {  usePrev } from './hooks/hooksFetch'; 

function CustomHook() {
  const [state , setState] = useState(0) ;
  const prev = usePrev(state);
return(<>

  <p>{state}</p>
  <button onClick={()=>{
    setState((curr)=>curr+1)
  }}>clickme</button>
  <p>the prev value {prev}</p>
</>) 
 

}

export default CustomHook;


// const [currentPost, setCurrentPost] = useState(1)
// const {finalData,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost);



// if (loading){
//   return <div>Loading...</div>  
// }
// return (
//   <div>
//     <button onClick={()=>setCurrentPost(1)}>1</button>
//     <button onClick={()=>setCurrentPost(2)}>2</button>
//     <button onClick={()=>setCurrentPost(3)}>3</button>
//     {JSON.stringify(finalData)}
//   </div>