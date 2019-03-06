import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardSubtitle,CardTitle,Button} from 'reactstrap'; 
import DesertRender2 from '../images/DesertRender2.png';

class card extends Component {
    render(){
        return(
    

        <div>
            <Card>
                <CardImg top width ="10%" src={DesertRender2} />
                <CardBody>
                    <CardTitle>Blender Model</CardTitle>
                    <CardSubtitle>A low poly desert model built in blender </CardSubtitle>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </div>

    );
    
    }


} 
export default card;
