import styled from "@emotion/styled";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
  margin: 5px 0px;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 5px 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

export const WrapperTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const WrapperNavigation = styled.div`
  position: fixed;
  bottom: 25px;
  left: 0px;
  right: 0px;
  padding: 0px 46px;
`;

export const Container = styled.div`
  padding: 0px 20px 87px 20px;
`;
