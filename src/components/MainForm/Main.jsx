import React, { Component } from 'react';
import Secondary from '../SecForm/Secondary';
import '../style.css';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            dropDownValue:"",
            subDivs:[],
            nextDivID :1
        }
    }

    // change under row <span> value corresponding to change input VaLue  
    changeInput = (e)=>{
        this.setState({
            inputValue : e.target.value
        })
    }

    // change under row <span> value corresponding to change Drop Down VaLue  
    changeDropDown = (e)=>{
        this.setState({
            dropDownValue:e.target.value
        })
    }

    // add New Row to Form Grid
    addRow = ()=>{
        this.setState({
            subDivs : [...this.state.subDivs , 
            <Secondary
            key={this.state.nextDivID} 
            divId = {this.state.nextDivID}
            distroyMe={this.removeRow}
            />] , 
            nextDivID : this.state.nextDivID+1
        })
    }

    // Decrease form grids by one row
    removeRow = (id)=>{
        let newSubDiv = this.state.subDivs.filter((div) =>{  
            return div.props.divId !== id;
        })

        this.setState({
            subDivs: newSubDiv
        });
    }

    
    render() {
        return (
        <div className="container card" id="cont">
            <h1 className="text-center">Anspire Agency Task</h1>
            <div className="element" id="element1">
                <span className="text-center">
                <input type="text" id="ip1" onChange={this.changeInput} className="input form-control" value={this.state.inputValue}/>
                <select className="form-control" onChange={this.changeDropDown} id="dD1">
                    <option value="">Select Your Job</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Doctor">Doctor</option>
                </select>
                <button className="btn btn-primary" onClick={()=>this.addRow(1)}>Add</button>
            </span>
                <div className="dataCont">
                    <span className="data" id="inputValue1"> {this.state.inputValue}</span>
                    <span className="data" id="dropDownValue1"> {this.state.dropDownValue}</span>
                </div>
            </div>
            <div className="SecDivs">
                {this.state.subDivs.map((div)=>{
                    return div ; 
                })}
            </div>
        </div>
        )
    }
}
