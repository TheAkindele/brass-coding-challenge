
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
    return (data: any, successCallback?: any, errorCallback?: any) => (dispatch: Dispatch) => (
        dispatch({type: types.GET_BANKS.REQUEST}),
        axiosService.request(
            'POST',
			"",
			(res: any) => {
                const publicKey = res.data
				dispatch({ type: types.GET_BANKS.SUCCESS, payload: publicKey });
				successCallback?.();
				showToast("Public Key Verified", "info");
			},
			(err: any) => {
                console.error('action error --->', err)
				dispatch({ type: types.GET_BANKS.FAILURE });
				showToast(err?.message, "error");
				errorCallback?.();
			},
			data
		)
    )
}


