// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
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