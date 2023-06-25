import { AddonsForm } from "../addonsForm/AddonsForm"
import { Button } from "../button/Button"
import { PersonaInfoForm } from "../personalInfoForm/PersonaInfoForm"
import { SelectPlanForm } from "../selectPlanForm/SelectPlanForm"
import { Stepper } from "../stepper/Stepper"
import { Text } from "../text/Text"

export const Form = () => {
    return(
        <div className="flex bg-white p-4 gap-4 rounded-lg shadow-xl">
            <Stepper />
            <div className="flex flex-col gap-6 py-8 px-12">
                <div className="flex flex-col leading-8">
                    <Text size="lg" content="Personal info" />
                    <Text color="secondary" content="Please provide your name, email adredd, and phone number."/>
                </div>
                
                <div className="flex flex-col justify-between h-full">
                    <form className="flex flex-col gap-4">
                       <AddonsForm />
                    </form>
                    <Button text='Next step' customClass="self-end" />
                </div>    
            </div>
        </div>
    )
}