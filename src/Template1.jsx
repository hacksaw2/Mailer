import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'




function Template1() {

  const [html, setHtml] = useState('')
  const [content, setContent] = useState([])
  const [changeContent, setChangeContent] = useState('')

  useEffect(() => {

    fetch('http://localhost:3000/api1')
      .then((response) => response.text())
      .then((data) => {
        setHtml(data)




      })

  }, [])





  const submitChange = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api1', { changeContent })
      .then(result => (console.log('change', result)))



  }





  return (

    <>   
     <div className='w-[40vw] ' >
      <div className="x">

      <div contentEditable="true" onInput={(e) => setChangeContent(e.currentTarget.innerHTML)} dangerouslySetInnerHTML={{ __html: html }} />



      </div>
      <div className="button flex justify-center">
      
<button className='bg-gray-400 p-1 rounded-md   ' onClick={submitChange}>Submit Change</button>
</div>
    </div>


</>


  )
}

export default Template1
