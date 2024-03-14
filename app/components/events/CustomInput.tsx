
import React from 'react'
// import { useForm } from 'react-hook-form';

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
    return (
        <div className={props.class}>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">{props.label}</span>
                </div>
                <input {...register} defaultValue={props.defaultValue} type={props.type} placeholder={props.label} id={props.id} className="input input-bordered w-full" />
                {errors && <p className='text-red-500'>{props.label} is required.</p>}
            </label>
        </div>
    )
}

export default CustomInput