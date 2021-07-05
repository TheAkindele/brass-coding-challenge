/* eslint-disable no-sequences */

import * as types from "../action.types"
import { Dispatch } from "redux";
import  axiosService  from 'utils/axiosService';
import { showToast } from "utils";


export const GetAllBanks = () => {
    return (country="nigeria", successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) => (
        dispatch({type: types.GET_BANKS.REQUEST}),
        axiosService.request(
            'get',
			`/bank?country=${country}`,
			(res: any) => {
				dispatch({ type: types.GET_BANKS.SUCCESS, payload: res?.data });
				successCallback?.();
				showToast(res?.message, "info");
			},
			(err: any) => {
				dispatch({ type: types.GET_BANKS.FAILURE });
				showToast(err?.message, "error");
				errorCallback?.();
			},
		)
    )
}

export const VerifyBankAccount = () => {
    return (accountDetail: any, successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) => (
        dispatch({type: types.VERIFY_ACCOUNT.REQUEST}),
        axiosService.request(
            'get',
			`/bank/resolve?account_number=${accountDetail?.accountNumber}&bank_code=${accountDetail?.bankCode}`,
			(res: any) => {
				dispatch({ type: types.VERIFY_ACCOUNT.SUCCESS, payload: res?.data });
				successCallback?.();
				showToast(res?.message, "info");
			},
			(err: any) => {
				dispatch({ type: types.VERIFY_ACCOUNT.FAILURE });
				showToast(err?.message, "error");
				errorCallback?.();
			}
		)
    )
}


export const FundTransfer = () => {
    return (transferData: any, successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) => (
        dispatch({type: types.TRANSFER_FUND.REQUEST}),
        axiosService.request(
            'get',
			`/bank`,
			(res: any) => {
				dispatch({ type: types.TRANSFER_FUND.SUCCESS, payload: res?.data });
				successCallback?.();
				showToast(res?.message, "info");
			},
			(err: any) => {
				dispatch({ type: types.TRANSFER_FUND.FAILURE });
				showToast(err?.message, "error");
				errorCallback?.();
			}
		)
    )
}

export const AddTransaction = () => {
	return (transaction: any) => (dispatch: Dispatch) => (
		dispatch({type: types.ADD_TRANSACTION.REQUEST}),
		dispatch({type: types.ADD_TRANSACTION.SUCCESS, payload: transaction})
	) 
}


