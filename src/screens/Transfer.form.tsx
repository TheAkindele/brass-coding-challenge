import React, {useState, useEffect} from 'react'
import {Input, Select, Button} from "components"
import {GetAllBanks, VerifyBankAccount} from "redux/actions"
import {useDispatch, useSelector} from "react-redux"
import {useFormik} from "formik"


interface Props {
    
}

const selectArr = [
    {class: "first", amount: "the first"},
    {class: "second", amount: "the second"},
    {class: "third", amount: "the third"},
    {class: "fourth", amount: "fourth"},
]

export const TransferForm = (props: Props) => {
    const dispatch = useDispatch()
    const _getAllBanks = GetAllBanks()
    const _verifyBankAccount = VerifyBankAccount()

    const [selectedBank, setBank] = useState("")

    const initialValues = {
        bank: "",
        accountNumber: "",
        accountName: "",
        amount: "",
        reason: "",
        source: ""
    }

    useEffect(() => {
        dispatch(_getAllBanks("nigeria"))
    }, [])

    const {banks, loading} = useSelector((state: any) => state.verification)
    console.log("all banks=== ", banks)

    // const verifyAccount = () => {
    //     selectedBank !== "" && 
    //     dispatch(_verifyBankAccount())
    // }

    const handleSubmit = () => {}
    
    const formik = useFormik({
		initialValues,
		onSubmit: handleSubmit,
		// validationSchema: AddAdminSchema,
		validateOnChange: false,
	});

    return (
        <form>
            <Select
                name="users"
                label="Select User"
                placeholder="Select Bank"
                onChange={(e: any) => setBank(e.target.value)}
                options={banks && banks?.map((bank: any, i: any) => ({
                    value: bank?.code,
                    label: bank?.name
                }))}
                id="option"
                // loading={loading}
            />

            <Input
                type="number"
                placeholder="Enter account number"
                name="accountNumber"
                label="Account Number"
                onChange={(e: any) => e.target.value}
                // loading={loading}
            />

            <Input
                type="text"
                placeholder="Account Name"
                name="accountNumber"
                label="Receiver's Name"
                value="Aderayo Tijanni"
                disabled
            />

            <Input
                type="number"
                placeholder="Enter an amount"
                name="amount"
                label="Transfer Amount "
            />

            <Input
                type="text"
                placeholder="Enter a reason"
                name="reason"
                label="reason"
            />

            <Button 
                text="Make Transfer" 
                className="form-btn" 
                 // onClick={}
            />
        </form>
    )
}
