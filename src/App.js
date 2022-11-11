import './App.css';
import { AllRoutes } from './components/navbar/AllRoutes';
import { NavbarNv } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarNv/>
      <AllRoutes />
    </div>
  );
}

export default App;
