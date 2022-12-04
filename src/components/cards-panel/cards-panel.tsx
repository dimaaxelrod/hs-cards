import { Button, Input } from "@zerto/shared-fe";
import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";
import { useGetCardsByClassQuery } from "../../store/hearthstone/hs.api";
import {PlayerCards} from "../player-cards/player-cards";
import { Container, CustomList, CustomLoader, Header } from "./styles";
import {TargetCard} from "./target-card";

export const CardsPanel = ({ nameOfClass }: { nameOfClass: string }) => {
  const { isLoading, data } = useGetCardsByClassQuery(nameOfClass);
  const { searchValue, sortedCards, targetCard } = useAppSelector(
    (state) => state.hs
  );
  const { sortCards, setTargetCard, backToChooseClass } = useActions();

  return (
    <div>
      <Header>
        <Button onClick={() => backToChooseClass()}>Back</Button>
      </Header>
      <Container>
        {isLoading && <CustomLoader />}
        {data && (
          <CustomList>
            <Input
              placeholder="Please enter card name"
              value={searchValue}
              onChange={(e) => {
                sortCards({ searchValue: e.target.value, cards: data });
              }}
            />

            {sortedCards
              ? sortedCards.map((card) => (
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setTargetCard(card)}
                    key={card.cardId}
                  >
                    {card.name}
                  </Button>
                ))
              : data?.map((card) => (
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setTargetCard(card)}
                    key={card.cardId}
                  >
                    {card.name}
                  </Button>
                ))}
          </CustomList>
        )}

        {targetCard && <TargetCard card={targetCard} />}
        {!isLoading && <PlayerCards />}
      </Container>
    </div>
  );
};


