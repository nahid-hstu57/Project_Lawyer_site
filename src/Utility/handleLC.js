import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoreData = () => {
  const stored = localStorage.getItem("booked");
  return stored ? JSON.parse(stored) : [];
};

const addData = (id) => {
  const stored = getStoreData();
  if (stored.includes(id)) {
    toast.error("This appointment is already booked!");
  } else {
    stored.push(id);
    localStorage.setItem("booked", JSON.stringify(stored));
    toast.success("Appointment successfully booked!");
  }
};

const removeFromStorage = (id) => {
  const updated = getStoreData().filter(item => item != id);
  localStorage.setItem("booked", JSON.stringify(updated));
  toast.success("The appointment has been successfully removed!");
};

export { addData, getStoreData, removeFromStorage };
