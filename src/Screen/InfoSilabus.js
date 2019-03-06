import React,{Component} from 'react';
import profile from './profile.jpeg'
import './css/Home.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class InfoSilabus extends Component{
    render(){
        return(
            <div className="img-profile">
                <img src={profile} className="image-silabus" alt="image-silabus" />
                <label>Video Tutorial: React Js untuk Pemula</label>
                <div className="progressbar-silabus">
                    <div class="progress" >
                            <div className="bar" class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                </div>
                <ListGroup>
                    <div>
                    <ListGroupItem tag="a" href="#" className="listgrup-silabus">
                     <img src={profile} className="image-menu-silabus" alt="image-silabus" />
                    Class Curiculum</ListGroupItem>
                    </div>
                    <div>
                    <ListGroupItem tag="a" href="#" className="listgrup-silabus">
                     <img src={profile} className="image-menu-silabus" alt="image-silabus" />
                    Class Curiculum</ListGroupItem>
                    </div>
                   
                </ListGroup>
                
            </div>
        );
    }
}
export default InfoSilabus;