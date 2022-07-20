// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {  Route, Routes } from 'react-router-dom';
import Friends from './components/Sidebar/Friends/Friends';



const App = (props) => {

  return (
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <Sidebar state={props.state.sidebar} />
          <div className='content'>
            <Routes>
              <Route path='/messages/*' element={<Messages state={props.state.messagePage} />} />
              <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}



export default App;