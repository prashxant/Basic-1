import React, { createContext, useContext, useState } from 'react'

const BulbContext = createContext();




function State() {
    const [bulbOn,setBulbOn] = useState(true)
  return (
    <div>
        <BulbContext.Provider value={{bulbOn,setBulbOn}}>
        <BulbState/>
        <ToggleBlub />
        </BulbContext.Provider>
    </div>
  )
}

        function BulbState (){
            const {bulbOn} = useContext(BulbContext)
            return<div>
                {bulbOn?"Bulb  on":"Bulb  off "}
            </div>
        }

       

        function ToggleBlub(){
            const {setBulbOn} = useContext(BulbContext)


            function Switch(){
                setBulbOn(c => !c)
            }
         return( <div>
                 <button onClick={Switch} >Bulb on Switch</button>
                 </div>
            )}


export default State
