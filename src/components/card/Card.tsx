import React from 'react';
import { Text } from "../text/Text"
import './Card.css';

type CardProps = {
    title: string,
    price: string,
    img: string,
    selected?: boolean,
}

export const Card = React.forwardRef(function card({ img, title, price, selected }: CardProps, ref: any) {
    return (
        <div className={`${selected ? 'selected' : ''} card-container border rounded-md p-4 md:h-40 w-full flex justify-between md:flex-col`}>
            <div className="rounded-full object-contain">
                <img src={img}></img>
            </div>
            <div className="flex flex-col">           
                <Text content={title} bold/>
                <Text content={price} color="secondary" size="sm" />
                <input ref={ref} type="radio" />
            </div>
        </div>
    )
})