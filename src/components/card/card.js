import React from "react"

export default class Card extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            showAction:false
        }
    }
    render(){
        return(
            <div className="card" onMouseEnter={()=>this.setState({showAction:true})} onMouseLeave={()=>this.setState({showAction:false})}>
                <textarea className="card-description" ></textarea>
                {
                    this.state.showAction &&
                    <div className="card-actions">
                        <span className="edit-icon action" uk-icon="icon:pencil"></span>
                        <span className="save-icon action" uk-icon="icon:check"></span>
                    </div>
                }
            </div>
        );
    }
}