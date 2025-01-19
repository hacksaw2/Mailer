import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Template from './Template.jsx'
// import Templates from './Templates.jsx'
import Editor from './Editor.jsx'
import Template2 from './Template2.jsx'
import Template1 from './Template1.jsx'

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/home' element={<Home/>}/>
<Route path='/templates' element={<Template/>}/>
<Route path='/editor' element={<Editor/>}/>



<Route path='/templates' element={<Template/>}>
<Route path='/templates/template1' element={<Template1/>}/>
<Route path='/templates/template2' element={<Template2/>}/>

</Route>

    </Route>



  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
