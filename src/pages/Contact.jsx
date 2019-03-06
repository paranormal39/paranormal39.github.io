import React, {Component} from 'react';
import './Home.css';
import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx'; 

class Contact extends Component{
    render(){
        return(
            <div>
                  <Navbar/>
            <div class='container'>  
          <div class='contactinfo'>
            <body>
                <div><b>if you wanna reach me the best way would be by email at amontanez09@gmail.com </b> </div>
                
              <div><b> You can also reach me at 432-448-1926</b></div>

               <div>
                   
               </div>

               
            </body>
            </div>
            </div>
            </div>
        );
    }
}

export default Contact