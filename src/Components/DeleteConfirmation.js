import React, { useState } from 'react';

const DeleteConfirmation = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
  };

  const handleConfirmDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>Delete</button>

      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete?</p>
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DeleteConfirmation;