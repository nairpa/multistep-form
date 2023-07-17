import { Text } from "../text/Text"
import './SummaryForm.css';
import React from 'react';

export const SummaryForm = (props: any) => {
    React.useEffect(() => {
        console.log(props.getValues())
    })
    return (
        <>
            <div className="p-6 summary-container flex flex-col rounded-lg">
                <Text bold content={`${props.getValues().plan.name}(${props.getValues().yearly ? 'Yearly' : 'Monthly'})`}/>
                <div className="flex justify-between border-b pb-4">
                    <Text color="secondary" content="Change"/>
                    <Text bold content={props.getValues().yearly ? `$/yr` : `$${props.getValues().plan?.price?.monthly}/mo`} />
                </div>
                <div className="flex flex-col gap-4 pt-4">
                    { props.getValues().addons.map((addon: any, i:number) => {
                        return(
                            <div key={i} className="flex justify-between">
                                <Text content={addon.name} color="secondary" />
                                <Text content={props.getValues().yearly ? `+$${addon?.price?.yearly}/yr` : `+$${addon?.price?.monthly}/mo` } />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="p-4 flex justify-between items-center">
                <Text content={`Total (${props.getValues().yearly ? 'per year': 'per month'})`} color="secondary" />
                <Text content={props.getValues().yearly ? '$350/yr' :'$50/mo'} bold color="accent" size="lg"/>
             </div>
        </>
    )
}