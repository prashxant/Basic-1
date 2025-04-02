import React from 'react'
import { BrowserRouter,Routes,Route,Link,useNavigate, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Landing/>} >
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/neet/class-12" element={<Class12></Class12>} />
            <Route path="*" element={<ErrorPage/>} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )

  function Landing(){
    return <div >
      <Link to="/">Allen </Link>
      |
      <Link to="/neet/class-11">Class 11 </Link>
      |
      <Link to="/neet/class-12"> Class12</Link>
      <div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          height:"80vh"}
        }>
      <Outlet/>
      </div>
      Footer| Contact Us
    </div>
  }






  function ErrorPage(){
    return < div style={{paddingTop:"10vh"}}>
    sorry page not found
    <br /><br /><br />
    </div>
  }

  function Class12(){
    const navigate = useNavigate()

    function goHome(){
       navigate("/")
    }
    return(
      <>
      hi wellcom to class 12 
       <button onClick={goHome}>
        Go to Home 
       </button>
      </>
    )

  }
}

export default App