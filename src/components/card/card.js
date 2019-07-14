import React from "react"
import { CARD_ACTIONS } from "../board/board"

export default class Card extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            showAction:false,
            editCard:false
        }
    }
    render(){
        return(
            <div className="card" onMouseEnter={()=>this.setState({showAction:true})} onMouseLeave={()=>this.setState({showAction:false})}>
                <textarea className="card-description" disabled={!this.state.editCard} defaultValue={this.props.id}></textarea>
                {
                    <div className="card-actions">
                    {
                        this.state.showAction && !this.state.editCard &&
                        <span className="edit-icon action" uk-icon="icon:pencil; ratio: 2" onClick={()=>this.setState({editCard:true})}></span>
                    }{   
                        this.state.editCard &&
                        <span className="save-icon action" uk-icon="icon:check; ratio: 2" onClick={()=>this.setState({editCard:false})}></span>
                    }
                        
                    </div>
                    
                }
                {
                    this.state.showAction && 
                <span className="delete-icon action" uk-icon="icon:trash; ratio: 1.5" onClick={()=>this.props.onCardAction(CARD_ACTIONS.DELETE,this.props.id)}></span>
                }
                </div>
        );
    }
}