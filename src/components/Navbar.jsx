import React, {Component} from 'react';
import{Link} from'react-router-dom';
import './NavBar.css';

class Navbar extends Component{
    render(){
        return(
     <nav className="navbar navbar-grey bg-grey ">
     <div class='container'>
      <Link class="navbar-brand" to="/" color="white">Anthony Montanez</Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>

      <div className="navbar-collapse collapse" id="navbarsExample01" styles="">
        <ul className="navbar-nav mr-auto">
           <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
         
        </ul>
       
      </div>
    </nav>

        );
    }
}


export default Navbar