import {Card} from "./card";
import { useAppSelector } from "../../hooks/redux";
import { CardModel } from "../../models/models";
import {  PlayerCardsContainer } from "./styles";

export const PlayerCards = () => {
  const { playerCards } = useAppSelector((state) => state.hs);
  return (
    <PlayerCardsContainer>
      {playerCards?.map((card: CardModel) => (
        <Card key={card.cardId} card={card} />
      ))}
    </PlayerCardsContainer>
  );
};

