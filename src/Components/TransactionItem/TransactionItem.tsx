import React from 'react';

const TransactionItem:React.FC = () => {
    return (
        <div className="border-black border-2 flex justify-between items-center ml-10 mr-10 rounded-md h-24">
            <div className="flex">
                <p className="ml-10">05.03.2024 12:00</p>
                <p className="ml-20">Salary</p>
            </div>
            <div className="flex">
                <p className="mr-32">+1000 kgs</p>
                <button className="mr-10">edit</button>
                <button className="mr-10">delete</button>
            </div>
        </div>
    );
};

export default TransactionItem;