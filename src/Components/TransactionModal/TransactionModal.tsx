import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../Store/transactionsSlice.ts';
import axiosApi from '../../axiosApi';

const AddTransactionModal: React.FC = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        category: '',
        amount: '',
        type: 'Expense',
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const createdAt = new Date().toISOString();
            const transactionData = {
                category: formData.category,
                amount: formData.amount,
                createdAt: createdAt,
            };
            const response = await axiosApi.post('/transactions.json', transactionData);
            dispatch(addTransaction({ id: response.data.name, ...transactionData }));
            setShowModal(false);
            setFormData({
                category: '',
                amount: '',
                type: 'Expense',
            });
        } catch (error) {
            console.error('Failed to save transaction', error);
        }
    };

    const expenseCategories = ['Food', 'Transportation', 'Utilities', 'Entertainment'];
    const incomeCategories = ['Salary', 'Bonus', 'Investments', 'Gifts'];

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add</button>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="w-96 bg-blue-300 p-6 rounded">
                        <h2>Add Expense/Income</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="type" className="block">Type:</label>
                                <select name="type" id="type" value={formData.type} onChange={handleChange} className="w-full mt-1 p-1">
                                    <option value="Expense">Expense</option>
                                    <option value="Income">Income</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="category" className="block">Category:</label>
                                <select name="category" id="category" value={formData.category} onChange={handleChange} className="w-full mt-1 p-1">
                                    {formData.type === 'Expense' ? (
                                        <>
                                            {expenseCategories.map((category: string) => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {incomeCategories.map((category: string) => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </>
                                    )}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="amount" className="block">Amount:</label>
                                <input type="number" name="amount" id="amount" value={formData.amount} onChange={handleChange} className="w-full mt-1 p-1" />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Transaction</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddTransactionModal;
