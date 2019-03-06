import React, {Component} from 'react';
import './Home.css';
import Navbar from '../components/Navbar.jsx'; 
//import DesertRender2 from '../images/DesertRender2.png';
import PhotoshootCover from '../images/PhotoshootCover.png';
import dw from '../images/FinalBoss.gif';
import test from '../images/TestGif.gif';
import arphoto from '../images/ufoRender.png';
import ar from '../images/arexample.jpg';
//import Card from '../components/Card.jsx';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  


class About extends Component{
    render(){
        return(
            <div>
                <Navbar/>
            <div class='container'>

   
         
            <div>
            <div>
                
                                   <p className="p1">I have dabbled in some of the latest trends in mobile development like augmented and virtual reailty. below is a picture of one of my creations a augmented reailty dj table. created during the Music game jam 2018 using a combination of sdks such as vuforia and wwise audio.</p>
                                 
                               
                                       
                                       

                                 
                                   </div>
                                   <img className ="img" width="100%"src={ar} />
                     </div>
                    
                     <div>
                         
                 <img src={test}height='200'width='200' style={{float:'right', padding:'10px'}}/>
                                   <p className="p2"> My project launched in May 5 2018 called #MyDjStory a hiphop inspired game where you play as a dj trying to get a high score by chasing music notes. It follows a pun group musicians such as link da plug, boweezy, and marz-lo as the music group becomes famous overnight.
                                   With simple one touch controls and a addictive game loop and fun music its a interesting game you should check it out.
                    </p>
                     </div>
                     <div>
                 

                 <img src={dw}height='175'width='175' style={{float:'left', padding:'10px'}}/>
                                   <p className="p2">  My first project was released on android in 2016 developed with Unity 5. I parted Up with a freind from college and it took us a solid three years to make our first game. I handled the art and animations with unitys built in editor and started learing c#. After years of trial and error we released in october of that year. 
                    </p>
                     </div>
                     
        
            </div>
            </div>



        );

    }
}

export default About