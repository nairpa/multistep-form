import { IStep } from "../../models/Step.model"
import { CheckCard } from "../checkCard/CheckCard"

const addons = [
    {
        id: 1,
        title: 'Online service',
        description: 'Access to multiplayer games',
        price: '+$1/mo',
    },
    {
        id: 2,
        title: 'Larger storage',
        description: 'Extra 1TB cloud save',
        price: '+$2/mo',
    },
    {
        id: 3,
        title: 'Customizable Profile',
        description: 'Custom theme on your profile',
        price: '+$2/mo'
    }
]

export const AddonsForm = (props: any) => {
    return (
        <>
            { addons.map(({id, ...rest}) => <CheckCard key={id} {...rest} />)}
        </>
    )
}