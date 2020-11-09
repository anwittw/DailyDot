import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import useForm from "../hooks/useForm";
import { UserContext } from "../context/UserContext";
// import { DELETE_ME } from "../queries";

function DeleteMeForm(props) {
  const { formValues, setInputProps, resetInputProps } = useForm();
  let { user, setUser } = useContext(UserContext);

  // const [deleteUser, { loading, error }] = useMutation(DELETE_ME, {
  //   onCompleted({ deleteUser }) {
  //     setUser({});
  //   },
  // });

  function onSubmit(e) {
    e.preventDefault();

    resetInputProps();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-8 flex flex-col items-center">
        <input
          {...setInputProps("deleteUser")}
          className="border-2"
          type="text"
          required
          placeholder="Please type 'delete me' to delete your account!"
        />
      </div>

      {formValues.deleteUser === "delete me" && (
        <button className="block bg-red-700 w-full" type="submit">
          Delete my Account now!
        </button>
      )}
    </form>
  );
}

export default DeleteMeForm;
