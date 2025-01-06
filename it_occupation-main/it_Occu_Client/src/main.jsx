
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'


// /**
//  * ส่วนของการ import หน้าเว็บทั้งหมด folder pages
// */
// import Landding from './pages/Landding.jsx'
// import About from './pages/About.jsx'
// import FindMyself from './pages/findMyself.jsx'
// import Contact from './pages/Contact.jsx'
// import Login from './pages/Login.jsx'
// import Register from './pages/Register.jsx'
// import Notfound from './pages/Notfound.jsx' 
// import Logout from './pages/Logout.jsx'
// import Question from './pages/Question.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Landding />
//   },
   
//   {
//     path: '/about',
//     element: <About />
//   },

//   {
//     path: '/findmyself',
//     element: <FindMyself />
//   },

//   {
//     path: '/contact',
//     element: <Contact />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/register',
//     element: <Register />
//   },
//   {
//     path: '/question',
//     element: <Question />
//   },
//   {
//     path: '/logout',
//     element: <Logout />
//   },
//   {
//     path: '*',
//     element: <Notfound />
//   },
// ]);

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>
    
    // <RouterProvider router={router} />,
   
)
