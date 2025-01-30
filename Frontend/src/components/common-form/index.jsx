import { Button } from "../ui/button";
import FormControls from "./form-control";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,// form data will be passed here and then will be reciving in form-control
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />

      <Button disabled={isButtonDisabled} type="submit" className="mt-5 w-full">{buttonText || "Submit"}</Button>
    </form>
  );
}

export default CommonForm;
