import React, {FC} from 'react'

interface Props {
    type?: string;
    loading?: boolean;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
    className?: string;
    required?: boolean;
    autoComplete?: string;
    value?: string;
    label?: string;
    icon?: string;
    defaultValue?: any;
    onChange?: any;
    rest?: any;
}

export const Input: FC<Props> = ({type, value, loading, name, 
        disabled,placeholder, className, autoComplete, onChange, label, ...rest}) => {

    return (
        <div className="input-box">
            {label && <span className="label"> {label} </span>}
            <input {...rest} 
            type={type} name={name} required autoComplete={autoComplete}
            placeholder={placeholder} value={value} disabled={loading} className={className}
            onChange={onChange}
            id={name}
        />
        </div>
    )
}

