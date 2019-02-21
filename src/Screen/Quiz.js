import React,{Component} from 'react';
import './css/Quiz.css'
import DiscussVideo from './DiscussVideo'
class Quiz extends Component{
    render(){
        return(
            <div>
                <h4>To-dos(0/3)</h4>
                    <div class="row">
                        <div class="col-sm-3">
                            <ul class="nav flex-column nav-pills" style={{backgroundColor:"#FFF"}}>
                                <li class="nav-item">
                                    <a class="nav-link active fa fa-square-o " href="#vtab1" data-toggle="tab"> Tab 1<i className="fa fa-check-circle" style={{marginLeft:"150px",borderRadius:"10px",color:"#4CAF50"}}></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link fa fa-square-o " href="#vtab2" data-toggle="tab"> Tab 2<i class="fa fa-times-circle"style={{marginLeft:"150px",borderRadius:"10px",color:"#FF2324"}}></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link fa fa-square-o " href="#vtab3" data-toggle="tab"> Tab 3<i class="fa fa-times-circle "style={{marginLeft:"150px",borderRadius:"10px",color:"#FF2324"}}></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-sm-7">
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="vtab1">
                                    <h3>Tab 1</h3>
                                    <p>Place a link with the class <code>.nav-tabs-dropdown.btn.btn-block.btn-primary</code> above the tabs list and add an id of <code>#nav-tabs-wrapper</code> to the tabs list for the dropdown to work.</p>
                                    <DiscussVideo/>
                                </div>
                                <div role="tabpanel" class="tab-pane fade" id="vtab2">
                                    <h3>Tab 2</h3>
                                    <p> Mauris imperdiet dignissim ante, in efficitur mauris elementum sed. Cras vulputate malesuada magna. Morbi tincidunt eros a dui cursus, vitae dignissim nulla scelerisque. Duis pharetra scelerisque mi vel luctus. Cras eu purus efficitur, blandit nisi id, fringilla nulla.</p>
                                    <DiscussVideo/>
                                </div>
                                <div role="tabpanel" class="tab-pane fade in" id="vtab3">
                                    <h3>Tab 3</h3>
                                    <p>Etiam id pharetra quam. Morbi tristique nunc vel sapien dapibus, sit amet imperdiet quam venenatis. Vestibulum et suscipit urna. Suspendisse volutpat quis est eu volutpat. Nulla non tortor venenatis turpis congue aliquet. Vivamus at elit vel massa elementum tempor sit amet sed odio. Nullam placerat, arcu sed ullamcorper ornare, erat erat placerat quam, in feugiat nulla purus in nunc. Maecenas vitae erat auctor, aliquam tellus et, vulputate eros.</p>
                                    <DiscussVideo/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Quiz;