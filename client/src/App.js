import logo from './logo.svg';
import './App.css';
import TopNavBar from './component/TopNavBar';
import LandingPageView from './component/LandingPageView';

function App() {
  return (
    <div className="App">
      <header>
        <div style={{minHeight: "10vh", width: '100%', backgroundColor: 'rgb(25 118 210 / 55%)'}}></div>
        <TopNavBar />
      </header>

      <div className='main-body'>

        <h1>Welcome to my Booking site</h1>

        <LandingPageView />

      </div>

      <footer>
        <div style={{minHeight: "10vh", width: '100%', backgroundColor: 'rgb(25 118 210 / 55%)'}}></div>
      </footer>
    </div>
  );
}

export default App;
