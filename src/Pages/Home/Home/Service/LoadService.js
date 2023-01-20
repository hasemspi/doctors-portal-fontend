import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png';
import Service from './Service';
const LoadService = () => {

    const getLoadData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            icon: fluoride,
            descrition: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavity,
            descrition: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: whitening,
            descrition: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div>
            <div className='mt-[30px] mb-3'>
                <div className='text-center'>
                    <h4 className='uppercase text-primary'>Services</h4>
                    <h5>Services We Provide</h5>
                </div>
            </div>
            <div className=' mt-10 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    getLoadData.map(itemData => <Service key={itemData.id} data={itemData}></Service>)
                }
            </div>

        </div>
    );
};

export default LoadService;