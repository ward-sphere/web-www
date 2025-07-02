import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingScreen from './landing/landing-screen.component';
import PrimaryNav from './primary-nav/primary-nav.component';
import Education from './experience/education/education.component';
import Work from './experience/work/work.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PrimaryNav/>
        <Routes>
          <Route index element={ <LandingScreen/ > }/>
          <Route path="/education" element={ <Education /> } />
          <Route path="/work" element={ <Work /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
