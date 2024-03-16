
import React from 'react'

interface Props{
    label:string;
    id:string;
    type:string;
    class:string;
    defaultValue?:string;
    errors?:any;
    register?:any;
}

const CustomInput = (props: Props) => {
    const register = props.register;
    const errors = props.errors;
    const label = props.label;
    const type = props.type;
    const id = props.id;
    const className = props.class;

    return (
        <div className={className}>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">{label}</span>
                </div>
                <input {...register} type={type} placeholder={label} id={id} className="input input-bordered w-full" />
                {errors && <p className='text-red-500'>{label} is required.</p>}
            </label>
        </div>
    )
}

export default CustomInput