// import logo from './logo.svg';
import './App.css';

import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import Login from './components/Login/Login';
import { compose } from 'redux';
import { initialazeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';
import { Provider, connect } from 'react-redux';

// import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
//const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
//const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));




class App extends React.Component {

  componentDidMount() {
    this.props.initialazeApp();
  }


  render() {
    if (!this.props.initialazed) {
      return <Preloader />
    }
    return (
      <div className='wrapper'>
        <HeaderContainer />
        <div className='main'>
          <Sidebar />
          <div className='content'>
            <Suspense fallback={<div className={'loading'}>Loading...</div>}>
              <Routes>
                <Route path='/messages/*' element={<MessagesContainer />} />
                <Route path='/profile/*' element={<ProfileContainer />} />
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/news' element={<News />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
})


let AppContainer = compose(connect(mapStateToProps, { initialazeApp })(App));

export const SocialApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}
