import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

export const fetchTransactions = createAsyncThunk(
    'transactions/fetchTransactions',
    async () => {
        try {
            const response = await axiosApi.get('/transactions');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch transactions');
        }
    }
);

export const addTransaction = createAsyncThunk(
    'transactions/addTransaction',
    async (formData: any) => {
        try {
            const response = await axiosApi.post('/transactions', formData);
            return response.data;
        } catch (error) {
            throw new Error('Failed to add transaction');
        }
    }
);

const initialState = {
    transactions: [],
    status: 'idle',
    error: null
};


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTransactions.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.transactions = action.payload;
        });
        builder.addCase(fetchTransactions.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(addTransaction.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(addTransaction.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.transactions.push(action.payload);
        });
        builder.addCase(addTransaction.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
});

export default transactionsSlice.reducer;
