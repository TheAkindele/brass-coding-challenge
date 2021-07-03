
import * as types from "../action.types"

const initialState = {
    loading: false,
    banks: [],
    accountDetails: {},
    transfer: {}
}


export const verificationReducer = (state = initialState, {type, payload}: any) => {
    switch(type) {
        case (types.GET_BANKS.REQUEST):
            return {...state, loading: true}
        case (types.VERIFY_ACCOUNT.REQUEST):
            return {...state, loading: true}
        
        case (types.GET_BANKS.SUCCESS):
            return {...state, loading: false, banks: payload}
        case (types.VERIFY_ACCOUNT.SUCCESS):
            return {...state, loading: false, accountDetails: payload}

        case (types.GET_BANKS.FAILURE):
            return {...state, loading: false, bank: payload}
        case (types.VERIFY_ACCOUNT.FAILURE):
            return {...state, loading: false, accountDetails: payload}

        default:
            return state;
    }
}


