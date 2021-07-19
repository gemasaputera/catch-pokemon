import styled from "@emotion/styled";

export const Label = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: "Poppins";
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  padding: 14px 12px;
  border-radius: 10px;
  outline: none;
  &:focus {
    border-radius: 10px;
  }
`;
