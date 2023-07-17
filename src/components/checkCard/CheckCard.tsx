import React from "react";
import { Text } from "../text/Text"
import './CheckCard.css';

interface CheckCardProps extends React.HTMLProps<HTMLInputElement> {
    title: string,
    description: string,
    price: string,
}

export const CheckCard = React.forwardRef(function check({title, description, price, ...rest}: CheckCardProps, ref: any) {
    return (
        <div className="checkcard-container border rounded-lg p-4 flex gap-4">
            <input type="checkbox" className="opacity-100 w-5" ref={ref} {...rest}/>
            <div className="flex justify-between items-center w-full gap-4">
                <label className="flex flex-col">
                    <Text bold content={title}/>
                    <Text content={description} color="secondary"/>
                </label>
                <Text content={price} color="accent" bold/>
            </div>
        </div>
    )
})