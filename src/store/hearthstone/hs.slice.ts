import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardModel } from "../../models/models";

type HsState = {
  playerClass: string | null;
  playerCards: CardModel[];
  sortedCards: CardModel[] | null;
  targetCard: CardModel | null;
  searchValue: string;
};

type SortActionPayload = {
  searchValue: string;
  cards: CardModel[];
};

const initialState: HsState = {
  playerClass: null,
  playerCards: [],
  sortedCards: null,
  targetCard: null,
  searchValue: "",
};

export const hsSlice = createSlice({
  name: "hs",
  initialState,
  reducers: {
    sortCards(state, action: PayloadAction<SortActionPayload>) {
      const { cards, searchValue } = action.payload;
      state.searchValue = searchValue;
      state.sortedCards = cards.filter((card) =>
        card.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
    },
    setTargetCard(state, action: PayloadAction<CardModel>) {
      state.targetCard = action.payload;
    },
    addPlayerCard(state, action: PayloadAction<CardModel>) {
      state.playerCards.push(action.payload);
    },
    removePlayerCard(state, action: PayloadAction<CardModel>) {
      state.playerCards.splice(state.playerCards.indexOf(action.payload) - 1, 1)
    },
    chooseClass(state, action: PayloadAction<string>){
      state.playerClass = action.payload
    },
    backToChooseClass(state, action: PayloadAction){
      state.playerClass = null;
      state.targetCard = null;
      state.playerCards = [];
      
    }
  },
});

export const hsActions = hsSlice.actions;
export const hsReducer = hsSlice.reducer;
