import React from "react";
import DeleteMeForm from "../components/DeleteMeForm";
import FormContainer from "../components/FormContainer";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import ChangeEmailForm from "../components/ChangeEmailForm";

function Home(props) {
  return (
    <div>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <FormContainer>
        <SignUpForm />
      </FormContainer>
      <FormContainer>
        <DeleteMeForm />
      </FormContainer>
      <FormContainer>
        <ChangeEmailForm />
      </FormContainer>
    </div>
  );
}

export default Home;
