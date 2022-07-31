// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {

  return (
    <div className='wrapper'>
      <HeaderContainer />
      <div className='main'>
        <Sidebar  />
        <div className='content'>
          <Routes>
            <Route path='/messages/*' element={<MessagesContainer/>}
            />
            <Route path='/profile/*' element={<ProfileContainer/>}/> 
            <Route path='/profile/:userId' element={<ProfileContainer/>}/> 
            <Route path='/users' element={<UsersContainer/>}/>
            <Route path='/settings' element={<Settings />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;