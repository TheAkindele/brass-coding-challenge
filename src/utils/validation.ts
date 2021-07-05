import * as Yup from "yup";

export const TransferValidationSchema = (): {} => {
	return Yup.object().shape({
		bank: Yup.string()
			.required("Bank name is required"),
		accountNumber: Yup.number()
			.required("Account Number is required"),
		amount: Yup.number()
			.required("Amount is required")
            .positive("Amount must be a positive number")
	});
};