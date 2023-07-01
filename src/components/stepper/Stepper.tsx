import { IStep } from '../../models/Step.model';
import { Step } from '../step/Step';
import './Stepper.css';

type StepperProps = {
    activeStep: number,
    steps: IStep[]
}

export const Stepper = ({ activeStep, steps } : StepperProps ) => {
    
    const isStepActive = (id: number) => {
        return activeStep === id
    }

    return (
        <div className="stepper md:rounded-lg flex md:flex-col gap-8 p-8">
            { steps.map(({step, name, id}) => <Step key={id} id={id} step={step} name={name} selected={isStepActive(id)}/>)}
        </div>
    )
}