import React from "react";
import './Input.css';
import { Text } from "../text/Text";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    error?: string
}

export const Input = ({label='label', error, ...rest}: InputProps) => {
    return (
        <div className="w-max">
            <div className="flex items-center justify-between">
                <Text content={label} />
                <Text content={error} size="sm" color="error" bold/>
            </div>
            <input className="border rounded-md h-9 px-2 block leading-2" {...rest} />
        </div>
    )
}