import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStoreData, removeFromStorage } from '../../Utility/handleLC';
import SingleBooking from './SingleBooking';
import Charts from './Charts';

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedIds = getStoreData().map(Number);
    const booked = data.filter(lawyer => storedIds.includes(lawyer.id));
    setBooking(booked);
  }, [data]);

  const handleCancel = (id) => {
    const updatedBookings = booking.filter(b => b.id !== id);
    setBooking(updatedBookings);
    removeFromStorage(id);
  };

  return (
    <div className="px-8 md:px-20">
      <div>
      {booking.length > 0 && (
  <div className="my-10">
   <Charts bookings={booking}></Charts>
  </div>
)}

      </div>
      {booking.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold text-center mt-8 mb-4">
            My Today Appointments
          </h1>
          <p className="text-center text-gray-500 max-w-xl mx-auto">
            Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
          </p>

          <div className="mt-10 space-y-6">
            {booking.map((bb, index) => (
              <SingleBooking key={index} lawyer={bb} handleCancel={handleCancel} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center mt-20 mb-44">
          <h1 className="text-2xl font-bold mb-5">You Have Not Booked Any Appointment Yet</h1>
          <Link to={'/home'}>
            <button className="btn bg-green-950 text-white px-6 py-2 rounded-md">Book an Appointment</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Bookings;
