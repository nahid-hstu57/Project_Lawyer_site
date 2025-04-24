import React from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleBooking = ({ lawyer, handleCancel }) => {
  const handleClick = () => {
    handleCancel(lawyer.id);
    toast.success('Appointment cancelled successfully!');
    // Add any other toast you need here, like:
    toast.info('This is an info message!');
  };

  return (
    <div>
      {/* ToastContainer is added here for showing the toasts */}
      <ToastContainer />

      <div className="border rounded-xl p-5 mb-4 shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-sm">{lawyer.name}</h3>
            <p className="text-xs text-gray-500">{lawyer.specialization}</p>
          </div>
          <p className="text-sm text-gray-400">
            Appointment Fee : {lawyer.consultationFee} Taka
          </p>
        </div>
        <hr className="border-dashed border-gray-300 my-3" />
        <button
          onClick={handleClick} // No need for alert here, just the toast
          className="w-full text-red-500 border border-red-400 py-2 rounded-full font-semibold text-sm hover:bg-red-50 transition"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default SingleBooking;
