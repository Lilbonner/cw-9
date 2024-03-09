import React from 'react';
import dayjs from 'dayjs';

interface Transaction {
    id: string;
    createdAt: string;
    category: string;
    amount: number;
}

interface TransactionItemProps {
    transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({transaction}) => {
    const { createdAt, category, amount} = transaction;

    return (
        <div className="border-black border-2 flex justify-between items-center ml-10 mr-10 mt-10 rounded-md h-24">

            <div className="flex">
                <p className="ml-10">{dayjs(createdAt).format('DD.MM.YYYY HH:mm:ss')}</p>
                <p className="ml-20">{category}</p>
            </div>
            <div className="flex">
                <p className="mr-32">{amount} KGS</p>
                <button className="mr-10 material-symbols-outlined">
                    edit
                </button>
                <button className="mr-10 material-symbols-outlined">delete</button>
            </div>
        </div>
    );
};

export default TransactionItem;
