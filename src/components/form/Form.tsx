import { useForm } from "react-hook-form";
import { IStep } from "../../models/Step.model";
import { Button } from "../button/Button"
import { Stepper } from "../stepper/Stepper"
import { Text } from "../text/Text"
import React, { useState, useEffect } from 'react';
import { useFormContext } from "../../context/FormContext";

export const Form = ({ children }: React.PropsWithChildren) => {
    const { register, handleSubmit, watch, formState: { errors }, getValues} = useForm({ 
        mode: 'onChange', 
        defaultValues: { plan: 'arcade' } 
    });
    const { updateForm } = useFormContext();
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

    const onSubmit = (data: any) => {
        updateForm(data);
        handleNext();
    }

    const activeForm = () => {
        return (
            (children as React.ReactElement[]).map((child, i) => {
                if((i + 1) === step) {
                    return (
                        <div className="flex flex-col gap-6 py-8 px-12 md:mt-0 -mt-16 bg-white rounded-lg m-4 md:min-w-[540px]">
                            <div className="flex flex-col leading-8">
                                <Text size="lg" customClass="pb-2" content={child.props.title} />
                                <Text color="secondary" content={child.props.description}/>
                            </div>
                    
                            <div className="flex flex-col justify-between h-full gap-6">
                                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                                    { React.createElement(child.type, {
                                        ...{
                                            ...child.props,
                                            getValues,
                                            watch,
                                            register: register,
                                            errors: errors,
                                            key: child.props.id
                                        }
                                    }) }
                                    { formAction() }
                                </form>
                            </div>    
                        </div>
                    )
                }
            })
        )
    }

    const formAction = () => {
        if(isFirst()) {
            return (
                <>
                    <Button type="submit" text='Next step' customClass="self-end" />
                </>
            )
        }

        if(!isFirst() && !isLast()) {
            return (
                <div className="w-full flex justify-between">
                    <Button text="Go Back" onClick={handleBack} color="secondary" />
                    <Button type="submit" text='Next step' customClass="self-end" onClick={handleNext} />
                </div>
            )
        }

        if(isLast()) {
            return (
                <div className="w-full flex justify-between">
                    <Button text="Go Back" onClick={handleBack} color="secondary" />
                    <Button type="submit" text='Confirm' customClass="self-end" onClick={handleConfirm} />
                </div>
            )
        }
    }

    return(
        <div className="md:flex md:bg-white md:p-4 gap-4 md:rounded-lg md:shadow-xl">
            <Stepper activeStep={step} steps={steps}/>
            { activeForm() } 
        </div>
    )
}