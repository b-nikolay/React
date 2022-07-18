// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/messages' element={<Messages />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}



export default App;