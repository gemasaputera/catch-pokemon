import React from "react";
import { Container, WrapperRelease, Name, Subtitle } from "./styles";
import BigPokeball from "../../components/Icons/BigPokeball";

const Item = ({ data, ownedItem, isOwnedItem, handleRelease, onClickItem }) => {
  return (
    <Container>
      {handleRelease && (
        <WrapperRelease onClick={() => handleRelease(data)}>
          <BigPokeball width={40} height={40} />
        </WrapperRelease>
      )}
      <div style={{ cursor: "pointer" }} onClick={() => onClickItem(data)}>
        <img src={data.image} alt={data.name} />
      </div>
      <Name onClick={() => onClickItem(data)}>{data.name}</Name>
      {isOwnedItem && <Subtitle>{ownedItem || 0} Owned</Subtitle>}
      {data.nickname && <Subtitle>{data.nickname}</Subtitle>}
    </Container>
  );
};

export default Item;
