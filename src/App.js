import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar';
import PageZero from './pages/page0/page0';
import PageOne from './pages/page1/page1';
import PageTwo from './pages/page2/page2';
import PageThree from './pages/page3/page3';
import PageZeroZero from './pages/page_0/page_0';

function App() {
  return (
    <div className="App">
      
      {
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<PageZeroZero/>}/>
          <Route path="/interference" element={<PageZero />} />
          <Route path="/backoff" element={<PageOne />} />
          <Route path="/minimumsize" element={<PageTwo />} />
          <Route path="/findit" element={<PageThree />} />

        </Routes>
      </>
      }
    </div>
  );
}

export default App;
