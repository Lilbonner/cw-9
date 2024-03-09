import { useState, useEffect } from 'react';
import axiosApi from '../axiosApi.ts';
import TransactionItem from '../Components/TransactionItem/TransactionItem.tsx';
import Navbar from '../Components/Navbar/Navbar.tsx';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axiosApi.get('/transactions.json');
                const data = response.data;
                const transactionsArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setTransactions(transactionsArray);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();

        return () => {};
    }, []);

    useEffect(() => {
        const total = transactions.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
        setTotalPrice(total);
    }, [transactions]);

    return (
        <div>
            <Navbar/>
            <h3 className="text-2xl border-2 border-black w-72 h-16 ml-10 my-5 pl-2 pt-4 rounded-md">Total: {totalPrice.toFixed(2)} KGS</h3>
            {transactions.map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </div>
    );
};

export default TransactionList;
