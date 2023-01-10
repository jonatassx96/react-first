import styled from "styled-components";
import Background from "../../assets/bg-image.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: url("${Background}");
  background-size: cover;
  min-height: 1000px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  min-height: 1000px;
`;

export const H1 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
`;

export const InputLabel = styled.p`
display: flex;
align-items: flex-start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;
  letter-spacing: -0.408px;
  padding-left: 25px;
  
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  margin-bottom: 34px;
  padding-left: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  margin: 30px 0px;
  color: #eeeeee;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0px;
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  border: none;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
