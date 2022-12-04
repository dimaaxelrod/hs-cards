import { Button, Typography } from "@zerto/shared-fe";
import { ThemeProvider } from "styled-components";
import { useActions } from "../../hooks/actions";
import { CardModel } from "../../models/models";
import { CardInfoBox, ImageContainer, TargetCardContainer } from "./styles";

 export const TargetCard = ({ card }: { card: CardModel }) => {
  const { addPlayerCard } = useActions();

  return (
    <TargetCardContainer>
      <ThemeProvider theme={{ main: card.img }}>
        <ImageContainer />
      </ThemeProvider>
      <CardInfoBox>
        <Typography zVariant="widget-big">Card name: {card.name}</Typography>
        <Typography zVariant="widget-medium">
          Description: {card.text}
        </Typography>
        <Typography zVariant="widget-medium">
          Card set: {card.cardSet}
        </Typography>
        <Typography zVariant="widget-medium">
          Player class: {card.playerClass}
        </Typography>
        <Typography zVariant="widget-medium">Type: {card.type}</Typography>
        <Button onClick={() => addPlayerCard(card)}>Add card</Button>
      </CardInfoBox>
    </TargetCardContainer>
  );
};

