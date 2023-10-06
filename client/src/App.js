import './App.css';
import TopNavBar from './component/TopNavBar';
import AppRoutes from './AppRoutes';
import React, { useState, useEffect } from "react";
import Loading from './component/Loading';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1250);
    return () => clearTimeout(timer);
    
  }, []);

  return (
    <>
    {loading && <Loading />}
    <div className="App">
      <header>
        <div style={{minHeight: "10vh", width: '100%', backgroundColor: 'rgb(25 118 210 / 55%)'}}></div>
        <TopNavBar />
      </header>
      <main>        
        <div className='main-body'>

          <h1>Welcome to my Booking site</h1>

          <AppRoutes />

        </div>
      </main>
      <footer>
        <div style={{minHeight: "10vh", width: '100%', backgroundColor: 'rgb(25 118 210 / 55%)'}}></div>
      </footer>
    </div>
    </>
  );
}

export default App;
