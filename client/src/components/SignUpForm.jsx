import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import useForm from "../hooks/useForm";
import { UserContext } from "../context/UserContext";
import { SIGNUP } from "../queries";

function SignUpForm(props) {
  const { formValues, setInputProps, resetInputProps } = useForm();
  let { user, setUser } = useContext(UserContext);

  const [signup, { loading, error }] = useMutation(SIGNUP, {
    onCompleted({ signup }) {
      setUser(signup.username, signup._id, signup.email);
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    console.log(formValues);
    signup({
      variables: {
        username: formValues.username,
        password: formValues.password,
        email: formValues.email,
      },
    });
    resetInputProps();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-8 flex flex-col items-center">
        <label className="block mb-3" htmlFor="username">
          Username
        </label>
        <input
          {...setInputProps("username")}
          className="border-2"
          type="text"
          required
        />
      </div>
      <div className=" mb-8 flex flex-col items-center">
        <label className="block mb-3" htmlFor="email">
          E-Mail
        </label>
        <input
          {...setInputProps("email")}
          className="border-2"
          type="email"
          required
        />
      </div>
      <div className=" mb-8 flex flex-col items-center">
        <label className="block mb-3" htmlFor="password">
          Password
        </label>
        <input
          {...setInputProps("password")}
          className="border-2"
          type="password"
          required
        />
      </div>
      <button className="block bg-green-700 w-full" type="submit">
        Create Account
      </button>
    </form>
  );
}

export default SignUpForm;
