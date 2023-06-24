import './StepIndicator.css';

type StepProps = {
    name: string;
}

export const StepIndicator = ({name}: StepProps) => {
    return (
        <div className="step border font-bold border-white text-white rounded-full w-9 h-9 flex items-center justify-center">
            { name }
        </div>
    )
}