import React from 'react';
import char from '../../../assets/images/chair.png';
const Banner = () => {
    return (
        <div className="hero bg-base-100 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={char} className="w-1/2 rounded-lg" alt='home banner' />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;