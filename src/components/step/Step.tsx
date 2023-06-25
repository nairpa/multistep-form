import { StepIndicator } from "../stepIndicator/StepIndicator"
import { Text } from "../text/Text"

type StepProps = {
    id: number,
    name: string,
    step: string,
}

export const Step = ({ id, step, name }: StepProps) => {
    return (
        <div className="flex gap-2">
            <StepIndicator name={`${id}`}/>
            <span className="flex flex-col leading-4 gap-1">
                <Text content={step} color="secondary" />
                <Text content={name} color="light" bold/>
            </span>
        </div>
    )
}