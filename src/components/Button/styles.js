import styled from "@emotion/styled";

export const Button = styled.button`
  background: #48d0b0;
  border-radius: 50px;
  color: #fff;
  margin: 0px;
  padding: 12px 14px;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  min-width: 200px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: #41bfa2;
  }
  &:disabled {
    background: #8bd6c5;
  }
`;
