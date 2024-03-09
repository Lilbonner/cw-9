import { useState } from 'react';
import dayjs from 'dayjs';
import EditTransactionModal from '../TransactionModal/TransactionModalEdit.tsx';

const TransactionItem = ({ transaction, onDelete }) => {
    const { id, createdAt, category, amount } = transaction;
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCloseModal = () => {
        setIsEditing(false);
    };

    const handleSave = (formData) => {
        setIsEditing(false);
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this transaction?');
        if (confirmDelete) {
            onDelete(id);
        }
    };

    return (
        <div className="border-black border-2 flex justify-between items-center ml-10 mr-10 mt-10 rounded-md h-24">
            <div className="flex">
                <p className="ml-10">{dayjs(createdAt).format('DD.MM.YYYY HH:mm:ss')}</p>
                <p className="ml-20">{category}</p>
            </div>
            <div className="flex">
                <p className="mr-32">{amount} KGS</p>
                <button className="mr-10 material-symbols-outlined" onClick={handleEdit}>
                    edit
                </button>
                <button className="mr-10 material-symbols-outlined" onClick={handleDelete}>
                    delete
                </button>
            </div>
            {isEditing && (
                <EditTransactionModal
                    transaction={transaction}
                    onSave={handleSave}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default TransactionItem;
