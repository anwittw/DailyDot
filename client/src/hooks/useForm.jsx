import { useState } from "react";

function useForm(initialValues = {}) {
  const [formValues, setformValues] = useState(initialValues);

  function handleChange(e) {
    console.log(e.target.value);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setformValues({
      ...formValues,
      [e.target.id]: value,
    });
  }

  function resetInputProps() {
    setformValues({});
  }

  function setInputProps(fieldID) {
    return {
      id: fieldID,
      name: fieldID,
      value: formValues[fieldID] || "",
      onChange: handleChange,
    };
  }

  return { formValues, setInputProps, resetInputProps };
}

export default useForm;
