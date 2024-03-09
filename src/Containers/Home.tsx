import React from 'react';
import Navbar from "../Components/Navbar/Navbar.tsx";
import TransactionItem from "../Components/TransactionItem/TransactionItem.tsx";

const Home: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <div>
               <h3 className="text-2xl border-2 border-black w-52 h-16 ml-10 my-5 pl-2 pt-4 rounded-md">Total: </h3>
                <TransactionItem/>
            </div>
        </div>
    );
};

export default Home;