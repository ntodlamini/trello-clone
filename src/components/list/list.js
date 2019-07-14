import React from "react"
import Card from "../card/card"
import { CARD_ACTIONS } from "../board/board"

function List({onClose,onCardAction,cards,id,name}) {
    return(
        <div className="card-list">
            <header className="list-nav">
                <h5 className="card-list-name">{name + id}</h5>
                <span className="close-icon" uk-icon="icon: close" onClick={()=>onClose(id)}></span>
            </header>
            <div className="card-container">
            {
                cards.map((item)=>{
                    return <Card id={item.id} onCardAction={(action,cardId)=>onCardAction(action,id,cardId)}></Card>
                })
            }
            </div>
            <section className="add-container" onClick={()=>onCardAction(CARD_ACTIONS.ADD,id)}>
                <span className="add-icon" uk-icon="icon: plus-circle"></span>
                <p className="add-text">Add a card</p>
            </section>
        </div>
    );
    
}
export default List;