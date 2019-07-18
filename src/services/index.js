import Seed from "./seed.json"

export function getBoards() {
    return Seed.map((item)=>{
        return(
            {
                id:item.id,
                name:item.name
            }
        )
    })
}

export function getBoard(id) {
    return Seed.find((item)=>{
        return id===item.id
    })
}