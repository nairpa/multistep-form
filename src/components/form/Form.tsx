import { IStep } from "../../models/Step.model";
import { Button } from "../button/Button"
import { Stepper } from "../stepper/Stepper"
import { Text } from "../text/Text"
import { useState, useEffect } from 'react';

export const Form = ({ children }: React.PropsWithChildren) => {
    const [ step, setStep ] = useState(1);
    const [ steps, setSteps ] = useState<IStep[]>([]);

    useEffect(() => {
        getSteps();
    }, [])

    const getSteps = () => {
        const steps: IStep[] = [];

        (children as React.ReactElement[]).forEach((child, i) => steps.push({
            id: i + 1,
            step: `STEP ${i + 1}`,
            name: child?.props?.name
        }))

        setSteps(steps);
    }

    const isLast = () => {
        return step === steps.length;
    }

    const isFirst = () => {
        return step === 1;
    }

    const handleNext = () => {
        if(!isLast()) {
            setStep(step + 1);
        }
    }

    const handleBack = () => {
        if(!isFirst()) {
            setStep(step - 1);
        }
    }

    const handleConfirm = () => {
        console.log('confirm')
    }

    const activeForm = () => {
        return (
            (children as React.ReactElement[]).map((child, i) => {
                if((i + 1) === step) {
                    return (<>{child}</>)
                }
            })
        )
    }

    const formAction = () => {
        if(isFirst()) {
            return (
                <>
                    <Button text='Next step' customClass="self-end" onClick={handleNext} />
                </>
            )
        }

        if(!isFirst() && !isLast()) {
            return (
                <>
                    <Button text="Go Back" onClick={handleBack} />
                    <Button text='Next step' customClass="self-end" onClick={handleNext} />
                </>
            )
        }

        if(isLast()) {
            return (
                <>
                    <Button text="Go Back" onClick={handleBack} />
                    <Button text='Confirm' customClass="self-end" onClick={handleConfirm} />
                </>
            )
        }
    }

    return(
        <div className="md:flex md:bg-white md:p-4 gap-4 md:rounded-lg md:shadow-xl">
            <Stepper activeStep={step} steps={steps}/>
            <div className="flex flex-col gap-6 py-8 px-12 md:mt-0 -mt-16 bg-white rounded-lg m-4">
                <div className="flex flex-col leading-8">
                    <Text size="lg" content="Personal info" />
                    <Text color="secondary" content="Please provide your name, email adredd, and phone number."/>
                </div>
                
                <div className="flex flex-col justify-between h-full">
                    <form className="flex flex-col gap-4">
                        { activeForm() }
                    </form>
                    { formAction() }
                </div>    
            </div>
        </div>
    )
}