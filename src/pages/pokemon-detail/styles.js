import styled from "@emotion/styled";

export const TopNavigation = styled.div`
  padding: 24px 20px 30px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.div`
  padding: 0px 20px;
  height: 100%;
`;

export const TopTitle = styled.h3`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 5px 0px;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin-left: 10px;
`;

export const PokemonName = styled.p`
  color: ${(props) => props.theme.colors.primary};
  margin: 0px 0px 5px 0px;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  text-transform: capitalize;
`;

export const WrapperType = styled.div`
  padding: 4px 8px;
  background-color: #5162ab;
  border-radius: 50px;
  margin-right: 5px;
`;

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const TypeText = styled.p`
  color: #fff;
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-transform: capitalize;
`;

export const IdText = styled.p`
  color: #7480b2;
  margin: 0px;
`;

export const PokemonImage = styled.img`
  height: 300px;
  width: 300px;
`;

export const PokemonAbilities = styled.div`
  background-color: white;
  border-radius: 40px;
  padding: 24px;
`;

export const TitleAbilities = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-transform: capitalize;
`;

export const TextAbilities = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-transform: capitalize;
  margin-right: 2rem;
  flex: 1;
`;

export const ValueAbilities = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-transform: capitalize;
  margin-right: 2rem;
  flex: 2;
`;

export const TitleDialog = styled.p`
  color: ${(props) => props.theme.colors.primary};
  margin: 0px;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  text-transform: capitalize;
`;

export const PokemonNameDialog = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  margin: 0px;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export const Divider = styled.div`
  margin: 10px 0px;
  background-color: #000;
  height: 2px;
  width: 55px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

export const WrapperDialog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

export const WrapperDialogInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 20px;
`;
