import React from 'react';

const Banner = () => {
    return (
        <div className='rounded-xl'>
            <div className='rounded-xl'>
            <div
  className="hero min-h-screen rounded-xl"
  style={{
    backgroundImage:
      "url(./banner-img-1.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="w-5xl">
      <h1 className="mb-5 text-5xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
      <p className="mb-5 text-gray-400">
      Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Banner;