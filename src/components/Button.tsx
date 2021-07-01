import React, {FC} from 'react'
import {Loader} from "./Loader"

interface Props {
    text?: string | HTMLElement | JSX.Element;
    type?: any;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    id?: string;
    rest?: any;
    onClick?: (e?: any)=>void;
    e?: any;
}

export const Button: FC<Props> = ({ e, text, type, loading, disabled, className, id, onClick, ...rest }) => {
    return (
        <button 
            type={type && (type || undefined)}
            className={`button ${disabled || loading ? "disable" : ""} ${loading ? "loading" : ""} ${className}`}
            // onClick={onClick}
            onClick={(e:any)=> {
                e.preventDefault();
                onClick && onClick()
            }}
            id={id}
        >
            {loading ? <Loader/> : text}
        </button>
    )
}