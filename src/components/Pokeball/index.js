import React from "react";
import { Container, WrapperImage } from "./styles";
import BigPokeball from "../../components/Icons/BigPokeball";

const Pokeball = ({ data, handleCatch }) => {
  return (
    <Container>
      <WrapperImage onClick={() => handleCatch(data)}>
        <BigPokeball />
      </WrapperImage>
    </Container>
  );
};

export default Pokeball;
