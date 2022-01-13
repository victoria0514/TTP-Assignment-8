import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";
import Debit from "./components/Debit";
import Credit from "./components/Credit";


function App() {

  const mockLogIn = (logInInfo) => {
    const newUser = {...currentUser}
    newUser.userName = logInInfo.userName
    setCurrentUser(newUser)
  }



  return (
    // Browser Router at the top so everything inside can reference it
    // Links and components are in routes
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar>
      <Router>
        <div>
          <Route exact path="/" element={<Home user={currentUser}/>}/>
          <Route exact path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
          <Route exact path="/profile" element={<Profile user={currentUser}/>}/>
          <Route exact path="/debit" element={<Debit user={currentUser}/>}/>
          <Route exact path="/credit" element={<Credit user={currentUser}/>}/>
         
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
        <li><a Link to = "/profile" > Your Profile</a></li>
        <li><a Link to = "/debit" > Your Debit Card Information</a></li>
        <li><a Link to = "/credit" > Your Credit Card Information</a></li>
        </ul>





    </div>
  )
  }

export default App;
