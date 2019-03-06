import React, {Component} from 'react';
import './Home.css';
import Navbar from '../components/Navbar.jsx';
//import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class Home extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Jumbotron />
                <div className="container">
            <h1 >Software Developer</h1>
            <h2>A Little about myself</h2>
            <body>
                <div>
                    <p style={{fontSize:'large'}}>Growing up in West Texas in a small town called Pecos with a population of less than 10 thousand. I was one that people always went to for computer problems so naturally, I began experimenting and later developing a passion for software development. I graduated from Odessa college in 2013 with an Associates in Computer Information System/ Game Design. There I covered various technologies such as javascript, unity, unreal engine 3. Later after school, I picked up C# and Web development skills such as HTML, CSS, and played around with Azure database 
                   At OC I was exposed to 3D Modeling Sofware called Maya 3D where I covered various subjects like modeling, UV Mapping, Textures, Lighting. After school 

                    </p>
                </div>

                <div>
                    <p>This site that you are viewing was designed/built by myself using Javascript React Libary. Also, hosted on GitHub Pages with the repository included as well.
In addition, I am also quite familar with asp.net- from courses on Udemy. 
</p>
                </div>
            </body>
                  </div>
                  
                 
            </div>
           
            
           
        );
    }
}

export default Home