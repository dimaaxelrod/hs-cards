import styled from "styled-components";

export const PlayerCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 500px;
  overflow: scroll;
`;

export const PlayerCard = styled.div`
  margin: 0;
  padding: 0;
  width: 32%;
  height: 200px;
  background-image: ${(props) => `url(${props.theme.main})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row-reverse;
  color: #c62828;
`;
