import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Pages/Navbar'
import HomePage from './components/Pages/HomePage'
import Profile from './components/Pages/ProfilePage'
import Contact from './components/Pages/ContactPage'
import ProjectPage from './components/Pages/ProjectPage';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>

      <ScrollToTop />
      <Routes location={location} key={location.pathname} >
        <Route index element={ <HomePage /> } />
        <Route path='/Profile/project/:id' element={<ProjectPage />} />
        <Route path='/Profile' element={ <Profile /> } />
        <Route path='/Contact' element={ <Contact /> } />
      </Routes>
    </>
  )
}

export default App
