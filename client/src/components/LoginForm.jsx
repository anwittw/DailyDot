import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import useForm from "../hooks/useForm";
import { UserContext } from "../context/UserContext";
import { LOGIN } from "../queries";

function LoginForm(props) {
  const { formValues, setInputProps, resetInputProps } = useForm();

  let { user, setUser } = useContext(UserContext);

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      setUser(login.user);
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    login({
      variables: {
        username: formValues.username,
        password: formValues.password,
      },
    });
    resetInputProps();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-8 flex flex-col items-center">
        <label className="block mb-3" htmlFor="username">
          Username
        </label>
        <input
          {...setInputProps("username")}
          className="border-2 rounded"
          type="text"
          required
        />
      </div>
      <div className=" mb-8 flex flex-col items-center">
        <label className="block mb-3" htmlFor="password">
          Password
        </label>
        <input
          {...setInputProps("password")}
          className="border-2 rounded"
          type="password"
          required
        />
      </div>
      <button className="block bg-green-700 w-full rounded p-1" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
