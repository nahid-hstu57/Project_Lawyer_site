import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addData } from "../../Utility/handleLC";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((lawyer) => lawyer.id === bookId);
  const handleStoredData=id=>{
    addData(id);
  }

  return (
    <div className="px-20">
      <div className="text-center space-y-6 border my-5 p-16 rounded-3xl bg-gray-100">
        <h2 className="text-3xl font-bold">Lawyer’s Profile Details</h2>
        <p className="text-gray-600 mt-1">
        Experienced and reliable legal professional specializing in [Specialization].
        Committed to providing personalized and effective legal solutions with integrity, expertise, and client-focused advocacy across diverse legal matters.
        </p>
      </div>

      <div className="border rounded-3xl mb-6 p-6 flex items-center gap-10 shadow-md">
         <img className="rounded-3xl" src={singleData.image} alt={singleData.name} />
        <div className="flex-1 space-y-3">
          <button className="btn btn-sm bg-blue-100 text-blue-700 font-semibold rounded-full px-3 py-1 cursor-default">
            {singleData.experience}
          </button>
          <h2 className="text-2xl font-bold">{singleData.name}</h2>
          <div className="flex gap-2 text-gray-600 items-center">
            <p>{singleData.specialization}</p>
            <span className="text-xl">©</span>
            <p className="text-sm">License No: {singleData?.license}</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-semibold">Availability:</p>
            {singleData.availableDays.map((day, index) => (
              <span
                key={index}
                className="bg-orange-100 text-orange-500 text-sm px-2 py-1 rounded-full"
              >
                {day}
              </span>
            ))}
          </div>

          <div className="text-green-600 font-bold">
            Consultation Fee: <span className="text-black">Taka :</span> {singleData?.consultationFee}
          </div>
        </div>
      </div>

      <div className="border rounded-3xl p-10 space-y-3 mb-9 bg-white shadow">
        <h1 className="text-center text-2xl font-semibold">Book an Appointment</h1>
        <div className="flex justify-between items-center">
          <h1 className="font-medium">Availability</h1>
          <button className="btn btn-outline btn-primary rounded-3xl w-80">
            {"Lawyer Available Today"}
          </button>
        </div>
        <button className="btn btn-outline btn-secondary rounded-3xl text-left">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </button>
        <br />
        <button onClick={()=>handleStoredData(id)} className="btn w-full btn-primary rounded-3xl ">
          Book Appointment Now
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default DoctorDetails;