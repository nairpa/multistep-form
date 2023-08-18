import { addons } from "../../data/addons";
import { plans } from "../../data/plans";
import { Text } from "../text/Text"
import './SummaryForm.css';

export const SummaryForm = (props: any) => {
    const handleClick = () => {
        props.setStep(2)
    }

    const getSelectedPlan = (name: string) => {
        return plans.find(plan => plan.value === name);
    }

    const getSelectedAddons = (name: string) => {
        return addons.find(addon => addon.value === name);
    }
    
    const getTotalPrice = () => {
        let price: number = 0;
        const plan = getSelectedPlan(props.getValues().plan);
        const addons = props.getValues().addons ? props.getValues().addons.map((addon: string) => getSelectedAddons(addon)) : [];

        if(plan && addons) {
            if(props.getValues().yearly) {
                price += plan.price.yearly;
                addons.forEach((addon: any) => {
                    price += addon.price.yearly
                })
            } else {
                price += plan.price.monthly;
                addons.forEach((addon: any) => {
                    price += addon.price.monthly
                })
            }
        } 
       
        return price;
    }

    return (
        <>
            <div className="p-6 summary-container flex flex-col rounded-lg">
                <Text bold content={`${getSelectedPlan(props.getValues().plan)?.label}(${props.getValues().yearly ? 'Yearly' : 'Monthly'})`}/>
                <div className="flex justify-between border-b pb-4">
                    <Text color="secondary" content="Change" onClick={handleClick} />
                    <Text bold content={props.getValues().yearly ? `$${getSelectedPlan(props.getValues().plan)?.price.yearly}/yr` : `$${getSelectedPlan(props.getValues().plan)?.price.monthly}/mo`} />
                </div>
                <div className="flex flex-col gap-4 pt-4">
                    { props.getValues().addons ? props.getValues().addons.map((addon: any, i:number) => {
                        return(
                            <div key={i} className="flex justify-between">
                                <Text content={getSelectedAddons(addon)?.title} color="secondary" />
                                <Text content={props.getValues().yearly ? `+$${getSelectedAddons(addon)?.price?.yearly}/yr` : `+$${getSelectedAddons(addon)?.price?.monthly}/mo` } />
                            </div>
                        )
                    }) : <></>}
                </div>
            </div>
            <div className="p-4 flex justify-between items-center">
                <Text content={`Total (${props.getValues().yearly ? 'per year': 'per month'})`} color="secondary" />
                <Text content={props.getValues().yearly ? `$${getTotalPrice()}/yr` :`$${getTotalPrice()}/mo`} bold color="accent" size="lg"/>
             </div>
        </>
    )
}