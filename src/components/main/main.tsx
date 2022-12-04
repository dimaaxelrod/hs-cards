import { useAppSelector } from "../../hooks/redux";
import {CardsPanel} from "../cards-panel/cards-panel";
import { ClassPanel } from "../class-panel/class-panel";
import { MainContainer } from "./styles";

export const Main = () => {
  const {playerClass} = useAppSelector(state => state.hs)
  console.log(playerClass);
  
  if (playerClass) {
    return (
      <div>
        <CardsPanel nameOfClass={playerClass} /> 
      </div>
    );
  }

  return (
    <MainContainer>
      <ClassPanel />
    </MainContainer>
  );
};

