import React from "react"

class Home extends React.Component{
    render(){
        return(
            <div className="board-view">
                <h2 className="username"></h2>
                <div className="board-list"></div>
                <span className="add-icon"></span>
            </div>
        );
    }
}