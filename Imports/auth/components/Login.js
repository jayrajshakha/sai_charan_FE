"use client";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import MainWrapper from "../../../components/helper/Container";
import { UseLogin } from "../api/UseLogin";
import { CloseEyeIcon, Eye } from "../assets";

const Login = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const HandlerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      console.log(response, "response");
      if (response && response.token) {
        setCookie(null, "token", response?.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        toast.success("Login Successfully", {
          theme: "colored",
          autoClose: 1000,
        });
        setLoading(false);
        setUserInfo({
          username: "",
          password: "",
        });
        router.push("/admin");
      } else {
        toast.error("Invalid Password And Email", {
          theme: "colored",
          autoClose: 1000,
        });
        setLoading(false);
        setUserInfo({
          username: "",
          password: "",
        });
      }
    }, 500);
  };

  return (
    <Container>
      <Div>
        <TitleDiv>
          <Heading>Login</Heading>
        </TitleDiv>
        <Form onSubmit={HandlerSubmit}>
          <InputWrapper>
            <Label>username</Label>
            <Input
              onChange={handleChange}
              value={userInfo.username}
              name="username"
              placeholder="UserName"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <InputPasswordWrapper>
              <InputPassword
                onChange={handleChange}
                value={userInfo.password}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <IconWrapper onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <CloseEyeIcon /> : <Eye />}
              </IconWrapper>
            </InputPasswordWrapper>
          </InputWrapper>
          <InputWrapper>
            <SubmitBtn>
              <Button type="submit">
                {loading ? (
                  <div className=" justify-center items-center inline-flex">
                    <div className="loader border-t-4 border-white rounded-full w-4 h-4 animate-spin"></div>
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </SubmitBtn>
          </InputWrapper>
        </Form>
      </Div>
    </Container>
  );
};

export default Login;

export const Container = styled(MainWrapper)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f4ff, #d9e7ff);
`;

const Div = styled.div`
  width: 90%;
  max-width: 450px;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 64px;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bd5;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #007bd5;
`;

const SubmitBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #007bd5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

const InputPasswordWrapper = styled.div`
  width: 100%;
  padding: 7px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #007bd5;
  }
`;

const InputPassword = styled.input`
  width: 90%;
  padding: 12px 0;
  border: none;
  outline: none;
  font-size: 16px;
  &:focus-within {
    box-shadow: none;
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  padding: 5px;
`;
