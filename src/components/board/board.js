import React from "react";
import List from "../list/list"
import { getBoard } from "../../services";
let id=1;
export const CARD_ACTIONS={ADD:"add",DELETE:"delete",EDIT:"edit",SAVE:"save"}

export default class Board extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            name:"List",
            list:[]
        }
    }
    componentDidMount(){
        let board=getBoard(this.props.id);
        //use this.props.id to look in JSON file for board
        if(board)
        this.setState({list:board.lists,name:board.name})
    }

    onButtonClick(){
        let myList=this.state.list
        let id=myList.length>0?myList[myList.length-1].id+1:0;
        myList.push({name:"List",id,cards:[]})
        this.setState({list:myList})
    }
    removeList(id){
        let myList=this.state.list
        let ind=myList.findIndex((item)=>item.id==id)
        myList.splice(ind,1)
        this.setState({list:myList})
    }
    cardAction(action,listId,cardId){
        let myList=this.state.list
        switch (action) {
            case CARD_ACTIONS.ADD:{
                let ind=myList.findIndex((item)=>item.id==listId)
                let id=1;
                if(myList[ind].cards.length>0){
                    let lastCard=myList[ind].cards[myList[ind].cards.length-1]
                    id=lastCard.id+1
                }
                myList[ind].cards.push({id})
                this.setState({list:myList})                
                break;
            } 
            case CARD_ACTIONS.DELETE:{
                let ind=myList.findIndex((item)=>item.id==listId)
                let cInd=myList[ind].cards.findIndex((item)=>item.id==cardId)
                myList[ind].cards.splice(cInd,1)
                this.setState({list:myList})                
                break;
            }        
            default:
                break;
        }
    }

    render(){
        return(
            <div className="board-view">
                <header className="board-top-nav">
                    <span className="back-icon" uk-icon="icon: chevron-left; ratio: 2" onClick={()=>this.props.onBack()}></span>
                    <h3 className="board-name">{this.props.name}</h3>
                </header>
                <div className="list">
                    <div className="list-container" >
                        {
                            this.state.list.map((item,index)=>{
                                return <List key={index} name={item.name} id={item.id} cards={item.cards} onCardAction={(action,listId,cardId)=>this.cardAction(action,listId,cardId)} onClose={(id)=>this.removeList(id)}></List>
                            })
                        }                                 
                    </div>
                    <div className="add-list-container"onClick={()=>this.onButtonClick()}>
                        <span className="add-list" uk-icon="icon: plus-circle"></span>
                        <p className="add-list-text"> <u>Add a list</u> </p>
                    </div>
                </div>
            </div>
        ); 
    }
}