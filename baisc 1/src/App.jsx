import React from 'react'

function App() {
  return (
    <div>
      <Card>
        <div>
          hi my name is prashant
        </div>
      </Card>
      <Card />
    </div>
  )
}

function Card({children}){
  return <div>
  {children}
  </div>
}




export default App