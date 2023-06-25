import { Step } from '../step/Step';
import './Stepper.css';

const steps = [
    {
        id: 1,
        step: 'STEP 1',
        name: 'YOUR INFO',
    },
    {
        id: 2,
        step: 'STEP 2',
        name: 'SELECT PLAN',
    },
    {
        id: 3,
        step: 'STEP 3',
        name: 'ADD-ONS',
    },
    {
        id: 4,
        step: 'STEP 4',
        name: 'SUMMARY',
    }
]

export const Stepper = () => {
    return (
        <div className="stepper flex flex-col gap-8 p-8">
            { steps.map(({step, name, id}) => <Step key={id} id={id} step={step} name={name}/>) }
        </div>
    )
}