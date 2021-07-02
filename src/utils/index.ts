/* eslint-disable no-useless-escape */
import cogoToast from "cogo-toast";
import CF from "currency-formatter";

export const generateActions = (action: string) => {
	action = action.toUpperCase();
	return {
		REQUEST: `${action}_REQUEST`,
		SUCCESS: `${action}_SUCCESS`,
		FAILURE: `${action}_FAILURE`,
	};
};

export const formatCurrency = (amount: string, code: string) =>
	CF.format(parseInt(amount), { code });

export const _isAnEmpytyObject = (obj: any) => {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) return false;
	}
	return true;
};


export const _getToken = () => {
	let token = "";
	const local_token = localStorage.getObject("token").access;
	token =
		(_isAnEmpytyObject(local_token) ? "" : local_token) ||
		sessionStorage.get("token");
	return token;
};


export const showToast = (message: string, type?: string) => {
	if (type) type = type.toLowerCase();

	switch (type) {
		case "success":
			cogoToast.success(message, { position: "top-right" });
			break;
		case "info":
			cogoToast.info(message, { position: "top-right" });
			break;
		case "loading":
			cogoToast.loading(message, { position: "top-right" });
			break;
		case "warn":
			cogoToast.warn(message, { position: "top-right" });
			break;
		case "error":
			cogoToast.error(message, { position: "top-right" });
			break;

		default:
			cogoToast.info(message, { position: "top-right" });
			break;
	}
};



