import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { Text } from "../text/Text"
import './Card.css';

interface CardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    title: string,
    price: string,
    img: string,
    selected?: boolean,
}

export const Card = React.forwardRef(function card({ img, title, price, selected, ...rest }: CardProps, ref: any) {
    return (
        <div className={`radio-container ${selected ? 'selected' : ''} md:h-40 w-full flex justify-between md:flex-col`}>
            <div className={`card-container border rounded-md gap-4 p-4 md:h-40 w-full flex md:justify-between md:flex-col`}>
                <div className="rounded-full object-contain">
                    <img src={img}></img>
                </div>
                <div className="flex flex-col">           
                    <Text content={title} bold/>
                    <Text content={price} color="secondary" size="sm" />
                </div>
            </div>
            <input ref={ref} type="radio" {...rest} />
        </div>
        

    )
})