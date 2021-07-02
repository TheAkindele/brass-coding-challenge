import { combineReducers } from "redux";
import {verificationReducer as verification} from "./verification.reducer"

export const rootReducer = combineReducers({
    verification
})