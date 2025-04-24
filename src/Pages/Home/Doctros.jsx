import React, { useState } from 'react';
import Doctor from './Doctor';
import Details from './Details';

const Doctros = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowAll = () => {
    setVisibleCount(data.length);
  };

  return (
    <div>
      <h1 className='text-3xl text-center font-bold mt-28'>Our Best Lawyers</h1>
      <p className='text-sm text-gray-500 text-center my-5 px-20'>
        Our platform connects you with verified, experienced Lawyers across various specialties...
      </p>

      <div className='grid grid-cols-2 gap-8'>
        {data.slice(0, visibleCount).map((doctor, index) => (
          <Doctor key={index} doctor={doctor} />
        ))}
      </div>

      {visibleCount < data.length && (
        <div className='my-14 text-center'>
          <button onClick={handleShowAll} className="btn btn-primary rounded-3xl">
            Show All Lawyer
          </button>
        </div>
      )}

      <div>
        <Details />
      </div>
    </div>
  );
};

export default Doctros;
