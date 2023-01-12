import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import {GithubProvider} from './Context/Github/GithubContext'
import { AlertProvider } from './Context/Alert/AlertContext';
import Alert from './Components/Layout/Alert'
import User from './Components/Pages/User'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3'>
        <Alert></Alert>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
