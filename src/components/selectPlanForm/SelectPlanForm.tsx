import { useEffect, useState } from 'react';
import { Card } from "../card/Card"
import { Switch } from "../switch/Switch"
import "./SelectPlanForm.css";
import { plans } from "../../data/plans";

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
                { plans.map(({id, img, label, value, price}) => <Card 
                    key={id} 
                    img={img} 
                    title={label} 
                    price={getPrice(price)}
                    error={props?.errors['name']?.message} 
                    id={label.toLowerCase()}
                    value={value} 
                    {...props.register('plan')} 
                />)}
            </div>
            <div className="switch-container flex justify-center p-4 rounded-lg">
                <Switch {...props.register('yearly')} id="yearly" isChecked={yearly} labelCheck="Monthly" labelUncheck="Yearly" />        
            </div>
        </>

    )
}