import { useEffect } from 'react';
import { IStep } from "../../models/Step.model";
import { Card } from "../card/Card"
import { Switch } from "../switch/Switch"
import "./SelectPlanForm.css";

const cards = [
    {
        id: 1,
        img: './assets/images/icon-arcade.svg',
        title: 'Arcade',
        price: '$9/mo'
    },
    {
        id: 2,
        img: './assets/images/icon-advanced.svg',
        title: 'Advanced',
        price: '$12/mo',
    },
    {
        id: 3,
        img: './assets/images/icon-pro.svg',
        title: 'Pro',
        price: '$15/mo'
    }

]

export const SelectPlanForm = (props: any) => {

    return (
        <>
            <div className="cards-container flex gap-4">
                { cards.map(({id, img, title, price}) => <Card 
                    {...props.register(title.toLowerCase())}  
                    key={id} 
                    img={img} 
                    title={title} 
                    price={price}
                />)}
            </div>
            <div className="switch-container flex justify-center p-4 rounded-lg">
                <Switch labelCheck="Monthly" labelUncheck="Yearly"  />        
            </div>
        </>

    )
}