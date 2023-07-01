import { Text } from "../text/Text"
import './SummaryForm.css';

export const SummaryForm = (props: any) => {
    return (
        <>
            <div className="p-6 summary-container flex flex-col rounded-lg">
                <Text bold content="Arcade (Yearly)"/>
                <div className="flex justify-between border-b pb-4">
                    <Text color="secondary" content="Change"/>
                    <Text bold content="$90/yr" />
                </div>
                <div className="flex flex-col gap-4 pt-4">
                    <div className="flex justify-between">
                        <Text content="Online service" color="secondary" />
                        <Text content="+$10/yr" />
                    </div>
                    <div className="flex justify-between">
                        <Text content="Larger sotrage" color="secondary" />
                        <Text content="+$20/yr" />
                    </div> 
                </div>
            </div>
            <div className="p-4 flex justify-between items-center">
                <Text content="Total (per year)" color="secondary" />
                <Text content="$120/yr" bold color="accent" size="lg"/>
             </div>
        </>
    )
}