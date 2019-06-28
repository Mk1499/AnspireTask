import React, { Component } from 'react';
import "../style.css";

export default class Secondary extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            inputValue:"",
            dropDownValue:"",
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

    // 
    distroy = (id) => {
        console.log("Row num : ", id)
        this.props.distroyMe(id);
    }
    
    render() {
        return (
            <div id={"element"+this.props.divId}>
            <span className="text-center" id={"cont"+this.props.divId}>
                <input type="text" id={this.props.divId} onChange={this.changeInput} className="input form-control" />
                <select className="form-control" onChange={this.changeDropDown} id={"dD"+this.props.divId}>
                    <option value="">Select Your Job</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Doctor">Doctor</option>
                </select>
                <button className="btn btn-danger" onClick={()=>this.distroy(this.props.divId)}>Decrease</button>
            </span>
            <div className="dataCont">
                <span className="data" id={"inputValue"+this.props.divId}> {this.state.inputValue}</span>
                <span className="data" id={"dropDownValue"+this.props.divId}> {this.state.dropDownValue}</span>
            </div>
            </div>
        )
    }
}
