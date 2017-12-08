import React, { Component } from 'react';
import './app.css';

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            deadline: 'December 25, 2017'
        }
    }

    /* */
    render(){
        return (
            <div className="app">
                <div className="app-title">CountDown to { this.state.deadline }</div>
                <div>
                    <div className="clock-days">14 Days</div>
                    <div className="clock-hours">30 hours</div>
                    <div className="clock-minutes">15 minutes</div>
                    <div className="clock-seconds">20 seconds</div>
                </div>
                <div>
                    <input placeholder='new date' />
                    <button>Submit</button>
                </div>
                
            </div>
        )
        
    }
}

export default App;