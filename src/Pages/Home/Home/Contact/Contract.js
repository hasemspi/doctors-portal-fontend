import React from 'react';
import { Form } from 'react-router-dom';
import appointment from '../../../../assets/images/appointment.png';
const Contract = () => {
    return (
        <section className='mt-32' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h5 className="text-2xl font-bold text-primary">Contact</h5>
                        <p className="py-6 text-primary">Stay connected with us</p>
                        <Form>
                            <div className="form-control">
                                <input type="text" placeholder="Enter Your  Email" className="input w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-2">
                                <input type="text" placeholder="Enter Your Subject" className="input w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-2">
                                <textarea className="textarea textarea-bordered h-24" placeholder="your massage"></textarea>
                            </div>
                            <button className="btn btn-primary mt-2">Submit</button>

                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contract;