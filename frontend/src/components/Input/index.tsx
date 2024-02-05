import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";

interface InputDynamicProps {
  label: string;
  errorMessage?: string;
}

type InputProps = InputDynamicProps & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <label>{props.label}:</label>
      <div>
        <input {...props} type={showPassword ? "text" : props.type} />
        {props.type === "password" && (
          <strong onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "hide" : "show"}
          </strong>
        )}
      </div>
      <span>{props.errorMessage}</span>
    </Container>
  );
};

export default Input;
