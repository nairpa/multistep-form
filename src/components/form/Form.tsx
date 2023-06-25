import { Button } from "../button/Button"
import { Stepper } from "../stepper/Stepper"
import { SummaryForm } from "../summaryForm/SummaryForm"
import { Text } from "../text/Text"

export const Form = () => {
    return(
        <div className="md:flex md:bg-white md:p-4 gap-4 md:rounded-lg md:shadow-xl">
            <Stepper />
            <div className="flex flex-col gap-6 py-8 px-12 md:mt-0 -mt-16 bg-white rounded-lg m-4">
                <div className="flex flex-col leading-8">
                    <Text size="lg" content="Personal info" />
                    <Text color="secondary" content="Please provide your name, email adredd, and phone number."/>
                </div>
                
                <div className="flex flex-col justify-between h-full">
                    <form className="flex flex-col gap-4">
                       <SummaryForm />
                    </form>
                    <Button text='Next step' customClass="self-end" />
                </div>    
            </div>
        </div>
    )
}