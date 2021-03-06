import React, {
  ChangeEvent,
  FC,
  useCallback,
  useState,
} from "react";
import api from "../../services/Axios";
import {
  Button,
  ButtonContainer,
  Container,
  Input,
  InputContainer,
  Logo,
  MainContainer,
  Response,
} from "./style";

interface IForm {
  [key: string]: string;
}

const EditProfile: FC = () => {
  const [form, setForm] = useState<IForm>();
  const [error, setError] = useState<string>();
  const [success, setSucess] = useState<string>();

  const changeData = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
    [form]
  );
  
  const handleSubmit = useCallback(() => {
    console.log(form);
  }, [form]);

  return (
    <Container>
      <MainContainer>
        <Logo>DropFile - Register</Logo>
        <br />
        <InputContainer>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={changeData}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={changeData}
          />
          <Input
            type="password"
            name="old_password"
            placeholder="Old_Password"
            onChange={changeData}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeData}
          />
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Password_Confirmation"
            onChange={changeData}
          />
        </InputContainer>
        <br />
        <br />
        <ButtonContainer>
          <Button onClick={handleSubmit}>Edit Profile</Button>
        </ButtonContainer>
        {error ? <Response color={"#ff4343"}>{error}</Response> : ""}
        {success && !error ? (
          <Response color={"green"}>{success}</Response>
        ) : (
          ""
        )}
      </MainContainer>
    </Container>
  );
};

export default EditProfile;
