import { List, ListItem, Loader } from "@zerto/shared-fe";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  background-image: ${(props) => `url(${props.theme.main})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const CustomList = styled(List)`
  width: 200px;
  height: 100vh;
  overflow: auto;
`;

export const CustomListItem = styled(ListItem)`
  border: 1px solid black;
 
`;

export const CardInfoBox = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CustomLoader = styled(Loader)`
margin-left: 50%;
align-self: center;
`

export const TargetCardContainer = styled.div`
width: 800px;
display: flex;
`

export const Header = styled.div`
width:100%;
height: 50px;
background-color: #453C67;
display: flex;
flex-direction: row-reverse;
align-items: center;
`
