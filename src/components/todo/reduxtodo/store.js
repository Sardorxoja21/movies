import {configureStore} from '@reduxjs/toolkit'
import Reducer from "../reduxtodo/Reducer"

const store = configureStore(
    {
        reducer:Reducer
    }
)
export default store