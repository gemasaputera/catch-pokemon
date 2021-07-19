import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  min-height: 170px;
  max-width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 15px #cad2e1;
  position: relative;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
  cursor: pointer;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
`;

export const WrapperRelease = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -20px;
  height: 40px;
  width: 40px;
`;
