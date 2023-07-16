import { useEffect, useState } from "react"
import { CheckCard } from "../checkCard/CheckCard"

const addons = [
    {
        id: 1,
        title: 'Online service',
        description: 'Access to multiplayer games',
        price: {
            monthly: 5,
            yearly: 20
        },
    },
    {
        id: 2,
        title: 'Larger storage',
        description: 'Extra 1TB cloud save',
        price: {
            monthly: 5,
            yearly: 20
        },
    },
    {
        id: 3,
        title: 'Customizable Profile',
        description: 'Custom theme on your profile',
        price: {
            monthly: 5,
            yearly: 20
        },
    }
]

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
            { addons.map(({id, price, ...rest}) => <CheckCard key={id} price={getPrice(price)} {...rest} />)}
        </>
    )
}