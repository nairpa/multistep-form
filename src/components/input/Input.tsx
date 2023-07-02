import React from "react";
import './Input.css';
import { Text } from "../text/Text";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    error?: string,
    fullWidth?: boolean,
}

export const Input = React.forwardRef(function input({label='label', error, fullWidth, ...rest}: InputProps, ref: any) {
    return (
        <div className={`${fullWidth ? 'w-full' : 'w-max'}`}>
            <div className="flex items-center justify-between">
                <Text content={label} />
                <Text content={error} size="sm" color="error" bold aria-errormessage/>
            </div>
            <input 
                ref={ref} 
                aria-invalid={!!error}
                className={`${fullWidth ? 'w-full' : 'w-max'} border rounded-md h-9 px-2 block leading-2`} 
                {...rest} 
            />
        </div>
    )
})