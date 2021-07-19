import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 23%);
  overflow: hidden;
`;

export const DialogBody = styled.div`
  border-radius: 20px;
  background: #fff;
  width: 80%;
  padding: 12px;
`;

export const ContainerClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const WrapperClose = styled.div`
  border-radius: 10px;
  height: 35px;
  width: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eee;
  }
`;
