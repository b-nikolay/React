// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
        <Sidebar />
        <Profile />
      </div>

    </div>
  );
}



export default App;