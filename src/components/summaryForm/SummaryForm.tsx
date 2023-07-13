import { useEffect, useState } from "react";
import { Text } from "../text/Text"
import './SummaryForm.css';

interface IForm {
    plan: 'arcade' | 'pro' | 'advanced',
    yearly: boolean,
    addons: any,
}

export const SummaryForm = (props: any) => {
    const [summary, setSummary] = useState<IForm | null>(null);

    useEffect(() => {
        const subscription = props.watch((value: any) => {
            setSummary(value)
        })
        return () => subscription.unsubscribe()
    }, [props.watch])

    return (
        <>
            <div className="p-6 summary-container flex flex-col rounded-lg">
                <Text bold content={`${summary?.plan}(${summary?.yearly ? 'Yearly' : 'Monthly'})`}/>
                <div className="flex justify-between border-b pb-4">
                    <Text color="secondary" content="Change"/>
                    <Text bold content={summary?.yearly ? '$100/yr' : '$20/mo'} />
                </div>
                <div className="flex flex-col gap-4 pt-4">
                    <div className="flex justify-between">
                        <Text content="Online service" color="secondary" />
                        <Text content={summary?.yearly ? '+$50/yr' : '+$5/mo' } />
                    </div>
                    <div className="flex justify-between">
                        <Text content="Larger sotrage" color="secondary" />
                        <Text content={summary?.yearly ? '+$50/yr' : '+$5/mo'} />
                    </div> 
                </div>
            </div>
            <div className="p-4 flex justify-between items-center">
                <Text content={`Total (${summary?.yearly ? 'per year': 'per month'})`} color="secondary" />
                <Text content={summary?.yearly ? '$350/yr' :'$50/mo'} bold color="accent" size="lg"/>
             </div>
        </>
    )
}