import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputDynamicProps {
  label: string;
  errorMessage?: string;
}

type InputProps = InputDynamicProps & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return (
    <Container>
      <label>{props.label}:</label>
      <input {...props} />
      <span>{props.errorMessage}</span>
    </Container>
  );
};

export default Input;
