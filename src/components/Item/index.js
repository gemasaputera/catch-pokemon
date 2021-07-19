import React, { lazy } from "react";
import { Container, WrapperRelease, Name, Subtitle } from "./styles";
const BigPokeball = lazy(() => import("../../components/Icons/BigPokeball"));

const Item = ({ data, ownedItem, isOwnedItem, handleRelease, onClickItem }) => {
  return (
    <Container>
      {handleRelease && (
        <WrapperRelease onClick={() => handleRelease(data)}>
          <BigPokeball width={40} height={40} />
        </WrapperRelease>
      )}
      <div style={{ cursor: "pointer" }} onClick={() => onClickItem(data)}>
        <img src={data.image} alt={data.name} width={96} height={96} />
      </div>
      <Name onClick={() => onClickItem(data)}>{data.name}</Name>
      {isOwnedItem && <Subtitle>{ownedItem || 0} Owned</Subtitle>}
      {data.nickname && <Subtitle>{data.nickname}</Subtitle>}
    </Container>
  );
};

export default Item;
