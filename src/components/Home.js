import React from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (

<div class="container">
         <div class ="navbar">
            <img src = "" class="logo"> </img>
            <nav>
                <ul>
                    <li><a href = "homepage.html" >HOME</a></li>
                    <li><a href = "news.html" >NEWS</a></li>
                    <li><a href = "aboutus.html" >ABOUT US</a></li>
                </ul>

            </nav>
        </div>

        <div class="row">
            <div class="col">
                <h1> Bank of React </h1>
                <Link to="/Profile">User Profile</Link>
                <AccountBalance accountBalance={this.props.accountBalance} />
                <Link to="/debit">Debits</Link>
                <br></br>
                <Link to="/credit">Credits</Link>
                <h2> We help you manage your money (think of something better to say lol) </h2>

            </div>

            <div class="col">
                <div class="card card1">
                    <h5> </h5>
                  
                </div>
                <div class="card card2">
                    <h5> </h5>
                    
                </div>
                <div class="card card3">
                    <h5> </h5>
                   
                </div>
                <div class="card card4">
                    <h5> </h5>
                    
                </div>
            </div>


        </div>
      </div>



    );
  }
}
export default Home;