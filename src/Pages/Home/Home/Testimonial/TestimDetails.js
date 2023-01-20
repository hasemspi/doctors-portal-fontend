import React from 'react';

const TestimDetails = (props) => {
    // console.log(props);
    const { description, image, userFullName, userShortName } = props.Testimonial;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div>
                        <div className="avatar mt-5">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className="avatar ml-5">
                            <div>
                                <p className='font-bold'>{userFullName}</p>
                                <p className='font-thin'>{userShortName}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default TestimDetails;