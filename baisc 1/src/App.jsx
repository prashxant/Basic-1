import React from 'react'
import { BrowserRouter,Routes,Route,Link,useNavigate } from 'react-router-dom'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Link to="/">Allen </Link>
      |
      <Link to="/neet/class-11">Class 11 </Link>
      |
      <Link to="/neet/class-12"> Class12</Link>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/neet/class-12" element={<Class12></Class12>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

  function ErrorPage(){
    return < div style={{paddingTop:"40vh"}}>
    sorry page not found
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