import React from "react"
import { CARD_ACTIONS } from "../board/board"

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
                <textarea className="card-description" defaultValue={this.props.id}></textarea>
                {
                    this.state.showAction &&
                    <div className="card-actions">
                        <span className="edit-icon action" uk-icon="icon:pencil"></span>
                        <span className="save-icon action" uk-icon="icon:check"></span>
                        <span className="delete-icon action" uk-icon="icon:trash" onClick={()=>this.props.onCardAction(CARD_ACTIONS.DELETE,this.props.id)}></span>
                    </div>
                }
            </div>
        );
    }
}