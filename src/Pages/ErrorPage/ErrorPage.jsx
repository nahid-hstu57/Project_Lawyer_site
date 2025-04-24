import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex justify-center mt-30'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="./s.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="text-red-800 text-3xl text-center">404 page not found</h2>
    <p className='text-center'>opps the page you are looking that doesnt exit</p>
    <div className="card-actions text-center justify-center ">
      <Link to={'/home'}><h1 className='text-center border rounded-3xl px-5 py-2 bg-amber-500 text-xl'>Back to home</h1></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ErrorPage;