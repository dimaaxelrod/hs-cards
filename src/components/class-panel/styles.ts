import styled from "styled-components";
import { RadioGroup } from "@zerto/shared-fe";

export const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomRadioGroup = styled(RadioGroup)`
width: 75%;
height: 250px;
`
