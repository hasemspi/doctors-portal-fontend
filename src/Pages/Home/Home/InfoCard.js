import React from 'react';

const InfoCard = (props) => {
    const { name, describe, icon, BgClass } = props.card;
    // console.log(name);
    // console.log(naem);
    return (
        <div className={`card card-side bg-base-100 shadow-xl p-4 text-white ${BgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{describe}</p>

            </div>
        </div>
    );
};

export default InfoCard; 