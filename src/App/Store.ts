import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../Store/transactionsSlice.ts';

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
