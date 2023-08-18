import { useEffect, useState } from "react"
import { CheckCard } from "../checkCard/CheckCard"
import { addons } from "../../data/addons";

export const AddonsForm = (props: any) => {
    const[ isYearly, setIsYearly] = useState(false);

    useEffect(() => {
        const subscription = props.watch((value: any) => {
            setIsYearly(value.yearly)
        })

        return () => subscription.unsubscribe()
    }, [props.watch])

    const getPrice = (price: { yearly: number, monthly: number }) => {
        if(isYearly) {
            return `+${price.yearly}/yr`
        } else {
            return `+${price.monthly}/mo`
        }
    }    

    return (
        <>
            { addons.map(({id, price, value, ...rest}) => <CheckCard 
                key={id} 
                price={getPrice(price)} 
                {...rest} 
                {...props.register('addons')} 
                id={id} 
                value={value}  
            />)}
        </>
    )
}