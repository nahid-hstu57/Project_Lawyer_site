import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-20 mb-5'>
            <h1 className='text-3xl font-bold text-center mt-12'>Blogs</h1>
            <p className='text-center my-5'>
                Lets explore some basic concept and learn more
            </p>
            <div className='space-y-3'>
                <div className='bg-gray-300 border rounded-xl p-5 space-y-2'>
                    <h1 className='text-2xl font-semibold'>What is use state and how does it is works?</h1>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>Ans : <br />useState allows your component to "remember" values between renders, like user input, toggles, counters, etc.</p>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>added at 2023-11-12</p>
                </div>
                <div className='bg-gray-300 border rounded-xl p-5 space-y-2'>
                    <h1 className='text-2xl font-semibold'>What is JSX?</h1>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>Ans : <br />JSX stands for JavaScript XML. It lets you write HTML inside JavaScript.</p>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>added at 2023-11-12</p>
                </div>
                <div className='bg-gray-300 border rounded-xl p-5 space-y-2'>
                    <h1 className='text-2xl font-semibold'>What is a component in React?</h1>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>Ans : <br />A component is a reusable piece of UI. You can create it using a function or a class.</p>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>added at 2023-11-12</p>
                </div>
                <div className='bg-gray-300 border rounded-xl p-5 space-y-2'>
                    <h1 className='text-2xl font-semibold'>What is props in React?</h1>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>Ans : <br />props are inputs passed to components. They're read-only.</p>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>added at 2023-11-12</p>
                </div>
                <div className='bg-gray-300 border rounded-xl p-5 space-y-2'>
                    <h1 className='text-2xl font-semibold'>What is the Virtual DOM?</h1>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>Ans : <br />Virtual DOM is a lightweight copy of the real DOM. React uses it to efficiently update the UI.</p>
                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p>added at 2023-11-12</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;