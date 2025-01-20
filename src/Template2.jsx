import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'




function Template1() {

  const [html, setHtml] = useState('')
  const [content, setContent] = useState([])
  const [changeContent, setChangeContent] = useState('')

  useEffect(() => {

    fetch('http://localhost:3000/api2')
      .then((response) => response.text())
      .then((data) => {
        setHtml(data)




      })

  }, [])





  const submitChange = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api2', { changeContent })
      .then(result => (console.log('change', result)))



  }





  return (
    <div >

      <div contentEditable="true" onInput={(e) => setChangeContent(e.currentTarget.innerHTML)} dangerouslySetInnerHTML={{ __html: html }} />

      <div >

      </div>


      <button className='bg-green-600 ' onClick={submitChange}>Submit Change</button>
    </div>




  )
}

export default Template1
