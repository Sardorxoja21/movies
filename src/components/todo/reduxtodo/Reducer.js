const initialState = [
    "fghj",
    "fghj"
]

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case "Add":
            let data = [...state]
            data.push(action.payload)
            console.log("ishladi");
            return data
            
        default:
            return state
    }
}

export default Reducer