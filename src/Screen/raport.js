import React, { Component } from 'react';
import './css/raport.css';
import dwcamp from './img/dwcamp.png';

class Raport extends Component {
    render() {
        return (
        <div className="all">
            <div className="headline"></div>
            <div className="bodyraport">
                <div className="row headeraport">
                    <div className="col-md-3">
                        <img src={dwcamp} className="logo img-responsive" alt="logo"/>
                    </div>
                    <div className="txtright text-center">
                        <p className="dwcamp">Dumbways Bootcamp</p>
                        <p className="progresreport">PROGRESS REPORT</p>
                    </div>
                </div>
                <div className="bio">
                    <p className="name">Student Name : Agfid Danu Prasetyo</p>
                    <div className="line"></div>
                    <p className="number">Student Number : 01</p>
                    <div className="line"></div>
                </div>
                <div className="txtsys">
                    <p className="grading">GRADING SYSTEM</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="nilai">A = 90-100 = 4.0</p>
                        <p className="nilai">B = 80-89 = 3.0</p>
                    </div>
                    <div className="col-md-4">
                        <p className="nilai">C = 70-79 = 2.0</p>
                        <p className="nilai">D = 60-69 = 1.0</p>
                    </div>
                    <div className="col-md-4">
                        <p className="nilai">F = 0-59 = 0.0</p>
                    </div>
                </div>
                <div className="tablenilai">
                    <table class="table table-bordered">
                        <thead>
                            <tr className="headtable">
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="left nilaitable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                <td className="nilaitable">A</td>
                            </tr>
                            <tr>
                                <td className="left nilaitable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                <td className="nilaitable">B</td>
                            </tr>
                            <tr>
                                <td className="left nilaitable">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                <td className="nilaitable">A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="bottomline"></div>
            </div>
        </div>
        );
    }
}
export default Raport;