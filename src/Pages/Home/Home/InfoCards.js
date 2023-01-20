import { primary } from 'daisyui/src/colors';
import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const InfoCards = () => {
    const CardData = [
        {
            id: 1,
            name: 'Opening Houre',
            describe: "lorem imsume data some one",
            icon: clock,
            BgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'visit you location',
            describe: 'please see the documentation',
            icon: marker,
            BgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'contact us now',
            describe: '01738292174',
            icon: phone,
            BgClass: 'bg-secondary'
        }

    ]

    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
                CardData.map(item => <InfoCard
                    key={item.id}
                    card={item}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;