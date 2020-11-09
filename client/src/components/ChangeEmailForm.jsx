import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import useForm from "../hooks/useForm";
import { UserContext } from "../context/UserContext";
import { CHANGE_EMAIL } from "../queries";

function ChangeEmailForm(props) {
  const { formValues, setInputProps, resetInputProps } = useForm();

  let { user, setUser } = useContext(UserContext);

  const [changeEmail, { loading, error }] = useMutation(CHANGE_EMAIL, {
    onCompleted({ changeEmail }) {
      setUser(changeEmail.user);
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    changeEmail({
      variables: {
        _id: user._id,
        email: formValues.email,
      },
    });
    resetInputProps();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-8 flex flex-col items-center">
        <input
          {...setInputProps("email")}
          className="border-2"
          type="email"
          required
          placeholder="Please type your new email"
        />
      </div>
      <button className="block bg-red-700 w-full" type="submit">
        Change E-Mail
      </button>
    </form>
  );
}

export default ChangeEmailForm;
