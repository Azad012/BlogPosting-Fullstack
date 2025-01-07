import React from 'react';
import Navbar from './navbar';

import Posts from './posts';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto p-4'>
                <div className=' lg:m-20 md:mt-20 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ' >
                    <Posts />
                </div>
            </div>
        </>

    );
};

export default Home;