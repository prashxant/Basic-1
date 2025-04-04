import React, { useState } from 'react'

function State() {
    const [bulbOn,setBulbOn] = useState(true)
  return (
    <div>

        <BulbState bulbOn={bulbOn}/>
        <ToggleBlub setBulbOn={setBulbOn}/>
    </div>
  )
}

        function BulbState ({bulbOn}){
            
        return<div>
            {bulbOn?"Bulb is on":"Bulb  off "}
        </div>
        }

       

        function ToggleBlub({setBulbOn}){
            function Switch(){
                setBulbOn(c => !c)
            }
            return(<div>
                <button onClick={Switch} >Bulb on Switch</button>
            </div>
            )}


export default State
