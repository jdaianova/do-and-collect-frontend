import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coins: 0,
    prevCoins: 0,
};

const coinsSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {
        setCoins: (state, action) => {
            state.prevCoins = action.payload;
            state.coins = action.payload;
        },

        incrementCoins: (state, action) => {
            state.prevCoins = action.payload;
            state.coins += action.payload;
        },

        decrementCoins: (state, action) => {
            state.prevCoins = action.payload;
            state.coins -= action.payload;
        },
    },
});

export const { setCoins, incrementCoins, decrementCoins } = coinsSlice.actions;

export default coinsSlice.reducer;
