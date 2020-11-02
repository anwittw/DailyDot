import React from "react";
import FormContainer from "../components/FormContainer";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Home(props) {
  return (
    <div>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <FormContainer>
        <SignUpForm />
      </FormContainer>
    </div>
  );
}

export default Home;
