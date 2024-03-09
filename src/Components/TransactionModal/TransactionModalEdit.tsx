import { useState } from 'react';

const EditTransactionModal = ({ transaction, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        category: transaction.category,
        amount: transaction.amount,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-96 р-96 bg-blue-300 p-6 rounded">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Edit Transaction</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" name="amount" id="amount" value={formData.amount} onChange={handleChange} />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditTransactionModal;
