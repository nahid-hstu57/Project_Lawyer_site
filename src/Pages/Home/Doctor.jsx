import React from 'react';
import { Link } from 'react-router';

const Doctor = ({doctor}) => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm ">
  <figure >
    <img   className="p-5 rounded-3xl w-44 object-cover"
      src={doctor.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <div className='space-x-2'>
        <button className="btn btn-outline btn-primary rounded-3xl">Available</button>
        <button className="btn btn-outline btn-primary rounded-3xl">{doctor.experience}</button>
    </div>
    <h2 className="card-title">{doctor.name}</h2>
    <p>{doctor.specialization}</p>
    <p>{doctor.license}</p>
      <Link to={`/DoctorDetails/${doctor.id}`}><button className="btn btn-primary rounded-3xl">View Details</button></Link>
  </div>
</div>
        </div>
    );
};

export default Doctor;