import React from 'react';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import TestimDetails from './TestimDetails';
const Testimonial = () => {
    const getTestimonial = [
        {
            id: 1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people1,
            userFullName: 'Winson Herry',
            userShortName: 'California'
        },
        {
            id: 2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people2,
            userFullName: 'Winson Herry',
            userShortName: 'California'
        },
        {
            id: 3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people3,
            userFullName: 'Winson Herry',
            userShortName: 'California'
        }
    ]
    return (
        <section>
            <div className='mt-24'>
                <p className='text-primary uppercase'>Testimonial</p>
                <h5>What Our Patients Says</h5>
            </div>
            <div className='grid gap-6 md:grid-cols-1 lg:grid-cols-3 mt-28'>
                {
                    getTestimonial.map(testuser => <TestimDetails key={testuser.id} Testimonial={testuser}></TestimDetails>)
                }
            </div>

        </section>
    );
};

export default Testimonial;