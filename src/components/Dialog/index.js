import React from "react";
import { Container, ContainerClose, WrapperClose, DialogBody } from "./styles";
import CloseSquare from "../Icons/CloseSquare";

const Dialog = ({ open, children, handleClose }) => {
  return (
    <Container open={open}>
      <DialogBody>
        <ContainerClose>
          <WrapperClose onClick={handleClose}>
            <CloseSquare />
          </WrapperClose>
        </ContainerClose>
        {children}
      </DialogBody>
    </Container>
  );
};

export default Dialog;
