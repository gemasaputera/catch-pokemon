import styled from "@emotion/styled";

export const ContainerItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
`;

export const ContainerIcon = styled.div`
  display: flex;
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: ${(props) => (props.active ? props.theme.colors.primary : "#CFD6E4")};
  margin: 0;
`;
