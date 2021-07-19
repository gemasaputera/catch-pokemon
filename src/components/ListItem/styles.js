import styled from "@emotion/styled";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0px 0px 10px 0px;
`;

export const WrapperList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  margin-bottom: 1rem;
`;

export const WrapperEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextEmptyState = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 15px 0px;
  text-align: center;
  max-width: 256px;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperTextOwned = styled.div`
  padding: 3px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #5162ab;
  margin-bottom: 10px;
`;

export const TextOwned = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin: 0px;
`;

export const ContainerMore = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 15px #cad2e1;
  cursor: pointer;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  margin: 0;
`;
