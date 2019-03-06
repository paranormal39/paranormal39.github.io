import React,{Component} from 'react';
import './Jumbotron.css';

import PhotoshootCover from '../images/PhotoshootCover.png';



class Jumbotron extends Component{
    render(){
        var styles ={
            backgroundImage : PhotoshootCover,
            
            
        };
        return(
            <div>
               
                <div class="Jumbotron" style={styles}  >
               
              
        <div className="container">
          <h1 className="display-3">#MyDJStory</h1>
             <p className="bodytext">wanna help support me go download my latest game on android give it a rating and a review just click the link below every download is greatly apreaciated</p>
          <p><a className="btn btn-primary btn-lg" href="https://paranormal09.itch.io/mydjnameis" role="button"  >Go play now</a></p>
        </div>
      </div>
            </div>

            
        );
       
    }
}

export default Jumbotron