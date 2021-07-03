import React from 'react'


interface Props {
    className?: string;
    options?: any;
    name?: string;
    onChange?: (e: any) => void;
    label?: string;
    placeholder?: string;
    id?: string;
    disabled?: boolean;
    loading?: boolean;
}
// (e: any) => setSelect(e.target.value)

export const Select = ({className, options, name, onChange, label, placeholder, id, disabled, loading}: Props) => {

    return (
        <div className={`select-box ${className}`}>
            {label && <label htmlFor={name} className="label">{label}</label>}
            <select name={name} id={name} 
                onChange={onChange}
            >
                {/* {options && <option key={options.i} value={options.value}>{options.label}</option>} */}
                {placeholder && 
                <option value="" disabled selected id={id}>{placeholder}</option>
                }
                {options?.map((item: any, i: any) => (
                    <option key={i} value={item.value} id={id} disabled={loading}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}
