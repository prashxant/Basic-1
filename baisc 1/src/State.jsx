import React, { createContext, useContext, useState } from 'react'

const BulbContext = createContext();

function BulbProvider ({children}){
    const [bulbOn,setBulbOn] = useState(true)

return <BulbContext.Provider value={{
     bulbOn,
    setBulbOn
}}>
    {children}
</BulbContext.Provider>
}


function State() {
  return (
    <div>
        <BulbProvider>
            <BulbState/>
            <ToggleBlub />
        </BulbProvider>
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
