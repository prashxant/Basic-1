import React from 'react'

function Clock() {
  
   
   
      const [count,setCount] = useState(0)
      let time = 0;
    
      function startClock(){
        time  =  setInterval(function()  {
          setCount(c => c + 1)
        }, 1000);
    
      }
    
      function stopClock(){
        setCount(0)
        clearInterval(time)
        console.log("stop clock")
    
      }
    
      return (
        <div>
          {count} <br />
          <button onClick={startClock}>Start</button>
          <button onClick={stopClock}>Stop</button>
        </div>
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // import React from 'react'
    // import { BrowserRouter,Routes,Route,Link,useNavigate, Outlet } from 'react-router-dom'
    
    // function App() {
    //   return (
    //     <div>
    
    //       <BrowserRouter>
          
    //         <Routes>
    //           <Route path="/" element={<Landing/>} >
    //             <Route path="/" element={<h1>Home</h1>} />
    //             <Route path="/neet/class-12" element={<Class12></Class12>} />
    //             <Route path="/neet/class-11" element={<Class11></Class11>} />
    //             <Route path="*" element={<ErrorPage/>} />
    //           </Route>
    //         </Routes>
          
    //       </BrowserRouter>
    //     </div>
    //   )
    
    //   function Landing(){
    //     return <div >
    //       <Link to="/">Allen </Link>
    //       |
    //       <Link to="/neet/class-11" >Class 11 </Link>
    //       |
    //       <Link to="/neet/class-12"> Class12</Link>
    //       <div style={{
    //           display:"flex",
    //           justifyContent:"center",
    //           alignItems:"center",
    //           height:"80vh"}
    //         }>
    //       <Outlet/>
    //       </div>
    //       Footer| Contact Us
    //     </div>
    //   }
    
    
    
    
    
    
    //   function ErrorPage(){
    //     return < div style={{paddingTop:"10vh"}}>
    //     sorry page not found
    //     <br /><br /><br />
    //     </div>
    //   }
    
    //   function Class11(){
    //     return <div>
    //       hi wellcome to class 11
    //     </div>
    
    //   }
    //   function Class12(){
    //     const navigate = useNavigate()
    
    //     function goHome(){
    //        navigate("/")
    //     }
    //     return(
    //       <>
    //       hi wellcom to class 12 
    //        <button onClick={goHome}>
    //         Go to Home 
    //        </button>
    //       </>
    //     )
    
    //   }
    // }
    
    // export default App
  )
}

export default Clock