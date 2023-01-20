import React from 'react';
import Banner from '../Banner/Banner';
import Appointments from './Appointment/Appointments';
import Contract from './Contact/Contract';
import DantalBanner from './DantalBanner';
import InfoCard from './InfoCards';
import LoadService from './Service/LoadService';
import Testimonial from './Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCard />
            <LoadService />
            <DantalBanner />
            <Appointments />
            <Testimonial />
            <Contract />
        </div>
    );
};

export default Home;