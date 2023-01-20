import React from 'react';
import doctor from '../../../../assets/images/doctor.png';
import appointment from '../../../../assets/images/appointment.png';
const Appointments = () => {
    return (
        <section className='' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero mt-28 text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className=" -mt-28 w-1/2 rounded-lg pt-6 -mb-4" alt='' />
                    <div>
                        <p className="font-medium uppercase text-primary">Appointment</p>
                        <h4 className="text-3xl font-bold">Make an appointment Today</h4>
                        <p className="py-6 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default Appointments;