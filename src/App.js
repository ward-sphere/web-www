import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingScreen from './landing/landing-screen.component';
import PrimaryNav from './primary-nav/primary-nav.component';

function App() {
  return (
    <div className="App">
      <PrimaryNav/>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={ <LandingScreen/ > }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
