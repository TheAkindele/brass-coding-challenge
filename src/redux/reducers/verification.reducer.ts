

import * as types from "../action.types"


const initialState = {
    loading: false,
    accountType: {current: 5028902, savings: 320975},
    banks: [],
    accountDetails: {},
    transfer: {},
    transactions: []
}


export const verificationReducer = (state = initialState, {type, payload}: any) => {
    switch(type) {
        case (types.GET_BANKS.REQUEST):
        case (types.VERIFY_ACCOUNT.REQUEST):
        case (types.TRANSFER_FUND.REQUEST):
        case (types.ADD_TRANSACTION.REQUEST):
            return {...state, loading: true}
        
        case (types.GET_BANKS.SUCCESS):
            return {...state, loading: false, banks: payload}
        case (types.VERIFY_ACCOUNT.SUCCESS):
            return {...state, loading: false, accountDetails: payload}
        case (types.TRANSFER_FUND.SUCCESS):
            return {...state, loading: false, transfer: payload}
        case (types.ADD_TRANSACTION.SUCCESS):
            return {...state, loading: false, transactions: [...state.transactions, payload]}

        case (types.GET_BANKS.FAILURE):
            return {...state, loading: false, bank: payload}
        case (types.VERIFY_ACCOUNT.FAILURE):
            return {...state, loading: false, accountDetails: payload}
        case (types.TRANSFER_FUND.FAILURE):
            return {...state, loading: false, ...payload}

        default:
            return state;
    }
}


