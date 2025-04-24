import React from 'react';
import Doctros from './Doctros';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    return (
        <div className='p-20'>
            <Banner></Banner>
            <Doctros data={data}></Doctros>
        </div>
    );
};

export default Home;