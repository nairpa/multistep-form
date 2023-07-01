import { AddonsForm } from "./components/addonsForm/AddonsForm"
import { Form } from "./components/form/Form"
import { PersonaInfoForm } from "./components/personalInfoForm/PersonaInfoForm"
import { SelectPlanForm } from "./components/selectPlanForm/SelectPlanForm"
import { SummaryForm } from "./components/summaryForm/SummaryForm"

function App() {

  return (
    <>
      <Form>
        <PersonaInfoForm name="YOUR INFO" />
        <SelectPlanForm name="SELECT PLAN" />
        <AddonsForm name="ADD-ONS" />
        <SummaryForm name="SUMMARY" />
      </Form>
    </>
  )
}

export default App
