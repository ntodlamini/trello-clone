import React from "react"
import Thumbnail from "./thumbnail/thumbnail";
import Board from "../board/board";
import { getBoards } from "../../services";
export default class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            activeBoardId:1,
            activeBoardName:"name",
            isBoardActive:false,
            board:[]
        }
    }
    componentDidMount(){
        this.setState({board:getBoards()})
    }

    onButtonClick(){
        let myBoard=this.state.board
        let count = myBoard.length+1
        myBoard.push({name:"Project "+count})
        this.setState({board:myBoard})
    }
    removeBoard(){
        let myBoard=this.state.board
        myBoard.splice(myBoard.length-1)
        this.setState({list:myBoard})
    }
    render(){
        let {isBoardActive}=this.state
        return[
            isBoardActive?<Board id={this.state.activeBoardId} name={this.state.activeBoardName} onBack={()=>this.setState({isBoardActive:false})}/>:
            <div className="home">
                <header className="header">
                    <h2 className="logo">Trello-Clone</h2>
                </header>
                <div className="board-icons">
                    <h3 className="page-header">Board-View</h3>
                    <div className="grid-container">
                        {
                            this.state.board.map((item,index)=>{
                                return <Thumbnail key={index} className="grid-item" title={item.name} onClick={()=>this.setState({isBoardActive:true,activeBoardId:item.id,activeBoardName:item.name})}></Thumbnail>
                            })
                        }
                        <p className="add-board-text grid-item thumbnail" onClick={()=>this.onButtonClick()}><span uk-icon="icon: plus;"></span> Add a board </p>
                    </div>
                    {/* <p className="delete-board-text" onClick={()=>this.removeBoard()}> Delete a board </p> */}
                </div>
            </div>
        ];
    }
}