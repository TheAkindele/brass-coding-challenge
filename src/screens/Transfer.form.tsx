/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import {Input, Select, Button} from "components"
import {GetAllBanks, VerifyBankAccount, AddTransaction} from "redux/actions"
import {useDispatch, useSelector} from "react-redux"
import {useFormik} from "formik"
import {TransferValidationSchema} from "utils/validation"


export const TransferForm = () => {
    const dispatch = useDispatch()
    const _getAllBanks = GetAllBanks()
    const _verifyBankAccount = VerifyBankAccount()
    const _addTransaction = AddTransaction()

    const initialValues = {
        bank: "",
        accountNumber: "",
        amount: "",
    }

    const [form, setForm] = useState({
        bankCode: "",
        receiver: "",
    })

    const {banks, loading, accountDetails} = useSelector((state: any) => state.verification)

    useEffect(() => {
        dispatch(_getAllBanks("nigeria"))
    }, [])
    useEffect(() => {
        accountDetails?.account_name && setForm({...form, receiver: accountDetails?.account_name})
    }, [accountDetails, form])

    const verifyAccount = (acc: any) => {
        formik.values?.bank && 
        dispatch(_verifyBankAccount({accountNumber: acc, bankCode: formik.values?.bank}))
    }


    const handleSubmit = () => {
        // unfortunately, paystack does not allow for a third party payouts 
        // as a starter business which is the account I registered as so I
        // had to improvise a means to make it work..
        
        dispatch(_addTransaction(data))
    }
    
    const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		validationSchema: TransferValidationSchema,
		validateOnChange: false,
	});
    const { setFieldValue } = formik;

    const getBankname = () => {
        const bank = banks?.find((bank: any) => bank.code === formik.values.bank)
        return bank?.name
    }

    const data = {
        bankCode: formik?.values?.bank,
        bankName: getBankname(),
        accountNumber: formik?.values?.accountNumber,
        accountName: formik.values?.accountName,
        amount: formik?.values?.amount,
        receiver: form?.receiver,
    }

    return (
        <form >
            <Select
                name="bank"
                label="Select User"
                placeholder="Select Bank"
                options={banks && banks?.map((bank: any, i: any) => ({
                    value: bank?.code,
                    label: bank?.name
                }))}
                onChange={(e: any) => {
                    setFieldValue("bank", e.target.value);
                }}
                id="option"
                disabled={loading}
                errorMessage={formik?.errors?.bank}
            />

            <Input
                type="number"
                placeholder="Enter account number"
                name="accountNumber"
                label="Account Number"
                onChange={(e: any) => {
                    const account = e.target.value;
                    setFieldValue("accountNumber", account);
                    account.length === 10 && verifyAccount(account);
                }}
                disabled={loading}
                errorMessage={formik?.errors?.accountNumber}
            />

            <Input
                type="text"
                placeholder="Account Name"
                name="accountName"
                label="Receiver's Name"
                value={accountDetails?.account_name}
                disabled
            />

            <Input
                type="number"
                placeholder="Enter an amount"
                name="amount"
                label="Transfer Amount"
                onChange={(e: any) => {
                    setFieldValue("amount", e.target.value);
                }}
                min={'100'}
                max={"10000000"}
                disabled={loading}
                errorMessage={formik?.errors?.amount}
            />

            <Button 
                type="submit"
                text="Make Transfer" 
                className="form-btn" 
                loading={loading}
                onClick={formik.handleSubmit}
            />
        </form>
    )
}
