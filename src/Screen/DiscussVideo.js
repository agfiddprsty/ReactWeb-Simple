import React,{Component}from 'react'
import Profile from '../Screen/img/boy.png'
import { transparent } from 'material-ui/styles/colors';
class DiscussVideo extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h3>
                    Diskusi Yuk...
                </h3>
                <div className="tulis">
                    <table>
                        <tr>
                            <td>
                                <img src={Profile} style={{width:"20px"}} ></img>
                                <input style={{border:"0",outline:transparent}}></input>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default DiscussVideo;