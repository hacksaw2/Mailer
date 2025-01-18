import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeSvg from './Svgs/HomeSvg'
import TemplatesSvg from './Svgs/TemplatesSvg'
import EditSvg from './Svgs/EditSvg'
import MailerSvg from './Svgs/MailerSvg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container flex w-full h-[100vh]">


        <div className="left-section w-1/5 lg:w-[10vw] bg-gray-300  flex justify-center items-center">

          <div className="inner-box w-[18vw] lg:w-[8vw] h-[95vh]  bg-gray-100 p-3 rounded-md flex justify-center ">

     

<div className=" side-nav svg" >
  <ul>

<li className='icon text-center w-[16vw]  lg:w-[7vw] mb-2 text-sm lg:text-lg font-bold flex items-center justify-center '><MailerSvg/> Mailer</li>
           <li className='bg-gray-200 w-[16vw]  lg:w-[7vw] flex justify-center rounded-md mb-2  '> <HomeSvg /></li>
          <li className='bg-gray-200 w-[16vw]  lg:w-[7vw] flex justify-center rounded-md mb-2  '>  <TemplatesSvg /></li>
            <li className='bg-gray-200 w-[16vw]  lg:w-[7vw] flex justify-center rounded-md mb-2 '><EditSvg /></li>

            </ul>
            </div>

          </div>


        </div>

        <div className="right-section w-4/5 lg:w-[90vw] bg-green-500">
          f

        </div>
      </div>
    </>
  )
}

export default App
