import styled from "styled-components";

const Input = styled.input`
  background: #f8f9fa;
  box-sizing: border-box;
  border: 0px solid #f8f9fa;
  border-radius: 10px;
  width: 450px;
  height: 60px;
  decoration: null;
  box-shadow: none;
  padding-left: 20px;
  outline: none;
  -webkit-appearance: none;
  font-family: Jet;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #000;
  ::placeholder {
    font-family: Giaza;
    font-size: 24px;
    color: #d2d2d2;
  }
`;

interface Props {
  placeholder: string;
  value?: string | undefined;
  disabled?: boolean;
  onChange?: any;
  type?: string;
}

export const InputComponent = ({
  placeholder,
  value,
  disabled,
  onChange,
  type,
}: Props): JSX.Element => {
  return (
    <Input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
    />
  );
};
