import React from 'react'

function App() {
  return (
    <div>
      <Card kuch={"hero hoon main"}/>
      <Card kuch={"hero nahi hoon main"}/>
    </div>
  )
}

function Card({kuch}){
  return <div>
  {kuch}
  </div>
}




export default App