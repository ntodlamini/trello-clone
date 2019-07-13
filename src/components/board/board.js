import React from "react";
import List from "../list/list"

export default class Board extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            list:[]
        }
    }
    render(){
        return(
            <div className="board-view">
                <header className="board-top-nav">
                    <span className="back-icon" uk-icon="icon: chevron-left; ratio: 2"></span>
                    <h3 className="board-name">{this.props.name}</h3>
                </header>
                <div className="list">
                    <div className="list-container" >                    
                        <List name=""></List>                
                    </div>
                    <div className="add-list-container">
                        <span className="add-list" uk-icon="icon: plus-circle"></span>
                        <p className="add-list-text"> <u>Add a list</u> </p>
                    </div>
                </div>
            </div>
        ); 
    }
}