import React from "react"
import Card from "../card/card"
class List extends React.Component{
    render(){
        return(
            <div className="card-list">
                <header className="list-nav">
                    <h5 className="card-list-name">List Name</h5>
                    <span className="close-icon" uk-icon="icon: close"></span>
                </header>
                <div className="card-container">
                    <Card></Card>
                </div>
                <section className="add-container">
                    <span className="add-icon" uk-icon="icon: plus-circle"></span>
                    <p className="add-text">Add a card</p>
                </section>
            </div>
        );
    }
}
export default List;