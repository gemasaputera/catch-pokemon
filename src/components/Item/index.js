import React from "react";
import { Container, Name, Subtitle } from "./styles";

const Item = ({ data, ownedItem, isOwnedItem, onClickItem }) => {
  return (
    <Container onClick={() => onClickItem(data)}>
      <div>
        <img src={data.image} alt={data.name} />
      </div>
      <Name>{data.name}</Name>
      {isOwnedItem && <Subtitle>{ownedItem || 0} Owned</Subtitle>}
      {data.nickname && <Subtitle>{data.nickname}</Subtitle>}
    </Container>
  );
};

export default Item;
