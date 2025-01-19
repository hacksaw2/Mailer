import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'



function Template2(){

  const [html, setHtml] = useState('')

  useEffect(() => {

    fetch('http://localhost:3000/api2')
    .then((response)=> response.text())
    .then((data)=>{
      setHtml(data)
      console.log(data)
    })
   
  }, [])
  
  return (
<div>
 <div dangerouslySetInnerHTML={{ __html: html }} />
 


</div>

    
  )
}

export default Template2
