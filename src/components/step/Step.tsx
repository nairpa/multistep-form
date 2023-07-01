import { StepIndicator } from "../stepIndicator/StepIndicator"
import { Text } from "../text/Text"

type StepProps = {
    id: number,
    name: string,
    step: string,
    selected?: boolean,
}

export const Step = ({ id, step, name, selected=false }: StepProps) => {
    return (
        <div className={`${selected ? 'selected' : ''} flex gap-2`}>
            <StepIndicator name={`${id}`}/>
            <span className="md:flex flex-col leading-4 gap-1 hidden">
                <Text content={step} color="secondary" />
                <Text content={name} color="light" bold/>
            </span>
        </div>
    )
}