import { AddonsForm } from "./components/addonsForm/AddonsForm"
import { Form } from "./components/form/Form"
import { PersonaInfoForm } from "./components/personalInfoForm/PersonaInfoForm"
import { SelectPlanForm } from "./components/selectPlanForm/SelectPlanForm"
import { SummaryForm } from "./components/summaryForm/SummaryForm"
import { FormProvider } from "./context/FormContext"

function App() {

  return (
    <FormProvider>
      <Form>
        <PersonaInfoForm 
          name="YOUR INFO" 
          title="Personal info" 
          description="Please provide your name, email adredd, and phone number."
        />
        <SelectPlanForm 
          name="SELECT PLAN" 
          title="Select your plan" 
          description="You have the option of monthly or yearly billing."
        />
        <AddonsForm 
          name="ADD-ONS" 
          title="Pick add-ons" 
          description="Add-ons help enhace your gaming experience."
        />
        <SummaryForm 
          name="SUMMARY" 
          title="Finishing up" 
          description="Double-check everything looks OK before confirming."
        />
      </Form>
    </FormProvider>
  )
}

export default App
