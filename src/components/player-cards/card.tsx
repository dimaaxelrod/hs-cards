import { Icon } from "@zerto/shared-fe";
import { ThemeProvider } from "styled-components";
import { useActions } from "../../hooks/actions";
import { CardModel } from "../../models/models";
import { PlayerCard } from "./styles";

export const Card = ({ card }: { card: CardModel }) => {
  const { removePlayerCard } = useActions();
  return (
    <ThemeProvider theme={{ main: card.img }}>
      <PlayerCard>
        <Icon
          onClick={() => {
            removePlayerCard(card);
          }}
          color="error"
          type="close"
        />
      </PlayerCard>
    </ThemeProvider>
  );
};
