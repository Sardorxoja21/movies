const initialState = []

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "AllDATA":
            return action.payload

            case "INPUT_ADD":
                let data=[...state]
                data.unshift(action.payload)
                return data


                case "delete":
                    let a=[...state]
                    a.splice(action.payload,1)
                    return a
    
        default:
            return state
    }
}

export default Reducer

