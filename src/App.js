import './App.css';
import LandingScreen from './landing/landing-screen.component';
import PrimaryNav from './primary-nav/primary-nav.component';

function App() {
  return (
    <div className="App">
      <PrimaryNav/>
      <LandingScreen/>
    </div>
  );
}

export default App;
