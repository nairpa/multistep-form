import { StepIndicator } from "../stepIndicator/StepIndicator"
import { Text } from "../text/Text"

export const Step = () => {
    return (
        <div className="flex gap-2">
            <StepIndicator name="1"/>
            <span className="flex flex-col leading-4 gap-1">
                <Text content="STEP 1" color="secondary" />
                <Text content="YOUR INFO" color="light" bold/>
            </span>

        </div>
    )
}