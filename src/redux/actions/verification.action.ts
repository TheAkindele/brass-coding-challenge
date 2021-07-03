
import * as types from "../action.types"
import { Dispatch } from "redux";
import  axiosService  from 'utils/axiosService';
import { showToast } from "utils";


// BElow are the flutterwave api endpoints needed
// The flutterwave base url is "https://api.flutterwave.com/v3""
// To get all Nigerian banks - '{{BASE_API_URL}}/banks/NG'
// To validate account number - https://api.flutterwave.com/v3/accounts/resolve
// body params---- account_number, account_bank, this means bank code
// To make transfer - {Base_url}/transfers


export const GetAllBanks = () => {
    return (country="nigeria", successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) => (
        dispatch({type: types.GET_BANKS.REQUEST}),
        axiosService.request(
            'get',
			`bank?country=${country}`,
			(res: any) => {
                //console.log("res--- ", res)
				dispatch({ type: types.GET_BANKS.SUCCESS, payload: res?.data });
				successCallback?.();
				// showToast("Public Key Verified", "info");
			},
			(err: any) => {
                // console.error('action error --->', err)
				dispatch({ type: types.GET_BANKS.FAILURE });
				showToast(err?.message, "error");
				errorCallback?.();
			},
		)
    )
}

export const VerifyBankAccount = () => {
    return (accountNumber: any, bankcode: any, successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) => (
        dispatch({type: types.GET_BANKS.REQUEST}),
        axiosService.request(
            'get',
			`/bank/resolve?account_number=${accountNumber}/&bank_code=${bankcode}`,
			(res: any) => {
                //console.log("res--- ", res)
				dispatch({ type: types.GET_BANKS.SUCCESS, payload: res?.data });
				successCallback?.();
				// showToast("Public Key Verified", "info");
			},
			(err: any) => {
                // console.error('action error --->', err)
				dispatch({ type: types.GET_BANKS.FAILURE });
				showToast(err?.message, "error");
				errorCallback?.();
			}
		)
    )
}


