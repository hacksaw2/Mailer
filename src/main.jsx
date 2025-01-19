import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Templates from './Templates.jsx'
import Editor from './Editor.jsx'
import Template1 from './Template1.jsx'

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/home' element={<Home/>}/>
<Route path='/templates' element={<Template1/>}/>
<Route path='/editor' element={<Editor/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
