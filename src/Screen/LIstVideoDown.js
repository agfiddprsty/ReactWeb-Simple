import React, { Component } from 'react';
import { Card, CardDeck} from 'reactstrap';   
import './css/ListVideo.css';
import './css/VideoPlayer.css'
import lvl from './img/Level.png'
import lock from './img/LockWhite.png'
import ply from './img/ply.png'
import Axios from 'axios';
class ListVideoDown extends Component{
    constructor(){
        super()
        this.state={
            listvideo:[
                {id:"1",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test",type:"video"},
                {id:"2",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test",type:"video"},
                {id:"3",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test",type:"video"},
                {id:"4",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Kuiz 1",type:"quiz"},
                {id:"5",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Test",type:"video"},
                {id:"6",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Kuiz 1",type:"lock"},
                {id:"6",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Kuiz 1",type:"lock"},
                {id:"6",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Kuiz 1",type:"lock"},
                {id:"6",image:"https://source.unsplash.com/95YRwf6CNw8/450x250",tittle:"Kuiz 1",type:"lock"},

            ],
        }
    }
    componentDidMount(){
        console.log(this.state.listvideo);
        Axios.get("http://localhost:3333/lectures").then(ress=>{
            
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div className="dv-list-out-gd">
                {/* <h5>Berikutnya</h5> */}
                <div className="col-md">
                    <div className="scrollbar scrollbar-primary scrollbar-cl">
                        <div class="force-overflow">
                            {this.state.listvideo.map((item,key)=>{
                                if(item.type==="video"){
                                    return(
                                        <div>
                                            <CardDeck>
                                                <Card className="border-0"><a href={"/video/"+item.id} className="modul">
                                                        <div className="row dv-row-gd">
                                                            <div className="col-md-auto">
                                                                <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundImage:`url(${item.image})`}}>
                                                                    <img class="img-fluid img-thumbnail play-img-gd" src={ply} alt=""></img>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto dv-tittle-gd">
                                                                <h6 className="tittledown">{item.tittle}</h6>
                                                                <ul><i className="far fa-clock i-clock-gd"></i> <ul className="a-clock-gd">04.32</ul></ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </Card>
                                            </CardDeck>
                                        </div>
                                    )
                                }else if(item.type==="quiz"){
                                    return(
                                        <CardDeck>
                                            <Card className="border-0">
                                                <a href="/quiz/example" className="modul">
                                                    <div className="row dv-row-gd">
                                                        <div className="col-md-auto">
                                                            <div className="d-flex justify-content-center dv-bg-gd" style={{backgroundColor:"#FF5D5D"}}>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-auto dv-tittle-gd">
                                                            <h6 className="tittledown">{item.tittle}</h6>
                                                            <span className="a-clock-gd">Level <img src={lvl} alt="" style={{width:"13px"}}></img></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Card>
                                        </CardDeck>
                                    )
                                }else{
                                    return(
                                        <CardDeck>
                                            <Card className="border-0">
                                                <span className="modul">
                                                    <div className="row dv-row-gd">
                                                        <div className="col-md-auto">
                                                            <div className="d-flex justify-content-center dv-bg-gd" style={{background:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("+item.image+")"}}>
                                                                <img class="img-fluid img-thumbnail play-img-gd" src={lock} alt=""></img>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-auto dv-tittle-gd">
                                                            <h6 className="tittledown">1.Perkenalan</h6>
                                                            <ul><i className="far fa-clock i-clock-gd"></i> <ul className="a-clock-gd">04.32</ul></ul>
                                                        </div>
                                                    </div>
                                                </span>
                                            </Card>
                                        </CardDeck>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default ListVideoDown;