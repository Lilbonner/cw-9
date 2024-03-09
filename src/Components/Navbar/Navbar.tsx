import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddTransactionModal from '../TransactionModal/TransactionModal.tsx';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);


    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div className="bg-blue-300 flex h-14 justify-between items-center">
            <h3 className="text-3xl text-white font-bold ml-20">
                <NavLink to="/">Finance tracker</NavLink>
            </h3>
            <div className="text-2xl flex">
                <button className="mr-10 hover:bg-blue-200 active:bg-blue-400 focus:outline-none">
                    <NavLink to="/categories">Categories</NavLink>
                </button>
                <button className="mr-10 hover:bg-blue-200 active:bg-blue-400 focus:outline-none" onClick={() => setShowModal(true)}>Add</button>
                {showModal && <AddTransactionModal setShowModal={setShowModal} />}
            </div>
        </div>
    );
};

export default Navbar;
