import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import LogIn from "./components/Login";
import UserProfile from "./components/UserProfile";
import Debit from "./components/Debit";
import Credit from "./components/Credit";

function App() {




  return (
    // Browser Router at the top so everything inside can reference it
    // Links and components are in routes
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar>
      <Router>
        <div>
          <Route exact path="/" element={HomeComponent} />
          <Route exact path="/login" element={LogInComponent} />
          <Route exact path="/userProfile" element={UserProfileComponent} />
          <Route exact path="/debit" element={DebitComponent} />
          <Route exact path="/credit" element={CreditComponent} />
        </div>
      </Router>
      </NavBar>
      </header>
    </div>
    </BrowserRouter>
  );
}

function NavBar()
{
  return(
    <div>
        <ul>
        <li><a Link to = "/" > Home Page</a></li>
        <li><a Link to = "/login" > User Log In</a></li>
        <li><a Link to = "/userProfile" > Your Profile</a></li>
        <li><a Link to = "/debit" > Your Debit Card Information</a></li>
        <li><a Link to = "/credit" > Your Credit Card Information</a></li>
        </ul>



    </div>
  )

}
export default App;
