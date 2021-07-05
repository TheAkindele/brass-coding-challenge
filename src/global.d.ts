declare module "formik";

interface Istate {
    loading: boolean;
    accountType: {current: number, savings: number},
    banks: [],
    accountDetails: unknown,
    transfer: unknown
}