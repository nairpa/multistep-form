import { useEffect, useState } from 'react';
import { Card } from "../card/Card"
import { Switch } from "../switch/Switch"
import "./SelectPlanForm.css";

const cards = [
    {
        id: 1,
        img: './assets/images/icon-arcade.svg',
        title: 'Arcade',
        price: {
            yearly: 30,
            monthly: 10,
        }
    },
    {
        id: 2,
        img: './assets/images/icon-advanced.svg',
        title: 'Advanced',
        price: {
            yearly: 35,
            monthly: 15,
        }
    },
    {
        id: 3,
        img: './assets/images/icon-pro.svg',
        title: 'Pro',
        price: {
            yearly: 40,
            monthly: 20,
        }
    }

]

export const SelectPlanForm = (props: any) => {
    const [ yearly, setYearly] = useState(false);

    useEffect(() => {
        const subscription = props.watch((value: any) => {
            setYearly(value.yearly)
        })
        return () => subscription.unsubscribe()
    }, [props.watch])

    const getPrice = (price: { yearly: number, monthly: number}) => {
        if(yearly) {
            return `+${price.yearly}/yr`
        } else {
            return `+${price.monthly}/mo`
        }
    }
    return (
        <>
            <div className="cards-container flex gap-4">
                { cards.map(({id, img, title, price}) => <Card 
                    key={id} 
                    img={img} 
                    title={title} 
                    price={getPrice(price)}
                    error={props?.errors['name']?.message} 
                    id={title.toLowerCase()}
                    value={title.toLowerCase()} 
                    {...props.register('plan')} 
                />)}
            </div>
            <div className="switch-container flex justify-center p-4 rounded-lg">
                <Switch {...props.register('yearly')} id="yearly" isChecked={yearly} labelCheck="Monthly" labelUncheck="Yearly" />        
            </div>
        </>

    )
}