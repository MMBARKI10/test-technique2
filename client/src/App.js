
import './App.css';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { BrowserRouter, Redirect, Route, Switch,Routes } from "react-router-dom";
import Home from './pages/home/Home';
import { useSelector } from "react-redux";
import NavbarAnalyse from './pages/analyse/navbarAnalyse/NavbarAnalyse';
import Acceuil from './pages/acceuil/Acceuil';


function App() {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <Routes>
      <Route
         path="/"
       element={<Home />}
          />
     <Route
           path="signin"
            element={ <Login />}
          />
           <Route
         path="signup"
       element={<SignUp />}
          />
           <Route
         path="analyse"
       element={<NavbarAnalyse />}
          />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
