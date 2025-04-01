import React from 'react'

function Hi() {
  return (<div>
   <Name  name={"prashant"}/>
   <Name name={"hero"}/>
   </div>
  )
}

function Name (props){

return <>hi my name {props.name}</>

}


export default Hi