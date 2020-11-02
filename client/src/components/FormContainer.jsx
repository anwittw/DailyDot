import React from "react";

function FormContainer(props) {
  return (
    <div className="p-6 w-11/12 md:w-2/12 border-2 flex flex-col items-center rounded">
      <h1>{props.formTitle}</h1>
      {props.children}
    </div>
  );
}

export default FormContainer;
