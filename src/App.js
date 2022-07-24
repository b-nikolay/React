// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header/Header';

import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';

import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';



const App = (props) => {

  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
        <Sidebar  />
        <div className='content'>
          <Routes>
            <Route path='/messages/*' element={<MessagesContainer/>}
            />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/settings' element={<Settings />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;