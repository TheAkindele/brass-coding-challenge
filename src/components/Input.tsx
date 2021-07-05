import React, {FC} from 'react'

interface Props {
    type?: string;
    loading?: boolean;
    disabled?: boolean;
    placeholder?: string;
    name?: string;
    errorMessage?: string;
    className?: string;
    required?: boolean;
    autoComplete?: string;
    value?: string;
    label?: string;
    icon?: string;
    min?: string;
    max?: string;
    defaultValue?: any;
    onChange?: (e: any) => void;
    rest?: any;
}

export const Input: FC<Props> = ({type, value, loading, name, errorMessage, 
        disabled,placeholder, className, autoComplete, onChange, label, min, max, ...rest}) => {

    return (
        <div className="input-box">
            {label && <span className="label"> {label} </span>}
            <input {...rest} 
            type={type} name={name} required autoComplete={autoComplete}
            placeholder={placeholder} value={value} disabled={disabled || loading} className={className}
            onChange={onChange && onChange}
            id={name} min={min} max={max}
            />
            {errorMessage && (
				<span className="form-error">{errorMessage}</span>
			)}
        </div>
    )
}

