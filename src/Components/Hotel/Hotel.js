import React from 'react';
import './Hotel.css'
import { useParams, useHistory } from 'react-router-dom';
import InfoCard from '../InfoCard/InfoCard';

const Hotel = () => {
    const {hotelid,guestsNo,arrival,departure} = useParams()
    const history = useHistory()
    const reserve = (hotel) =>{
        history.push(`/checkout/${guestsNo}/${hotelid}/${arrival}/${departure}`)
    }


    return (
        <div className="hotel">
            <div className='hotel-description'>
                Hotel Description
                Hotel id: {hotelid} <br/>
            </div>

            <div className='hotel-card'>
                <InfoCard />
                <button onClick={reserve} >Reserve</button>
            </div>
        </div>
    );
};

export default Hotel;