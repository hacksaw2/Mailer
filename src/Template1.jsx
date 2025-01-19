import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'




function Template1(){

  const [html, setHtml] = useState('')
  const [content, setContent] = useState()

  useEffect(() => {

    fetch('http://localhost:3000/api1')
    .then((response)=> response.text())
    .then((data)=>{
      setHtml(data)
      // console.log(data)
      setContent(setContent)
      
      
    })
   
  }, [])

const submitChange = (e)=>{
  e.preventDefault();
  axios.post('http://localhost:3000/api1',{content})
  .then(result=>(console.log('change',result)))



}
  
  
  return (
<div>
 <div contentEditable="true"  onInput={(e)=>setContent(e.currentTarget.innerHTML)}  dangerouslySetInnerHTML={{ __html: html }} />
 

 {/* {html} */}



 
 <button className='bg-green-600 ' onClick={submitChange}>Submit Change</button>
</div>



    
  )
}

export default Template1
