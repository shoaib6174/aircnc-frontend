import React from 'react';
import './HotelCard.css'
const HotelCard = (props) => {
    const info = {
        capacity: ['4 Guests', '    2 bedrooms', '    2 beds', '    2 baths'],
        airCondition: 'With Air conditioned kitchen',
        cancellation: 'Cancellation flexibility available',
    }
    const {name, price, rating,img} = props.hotelInfo
    return (
        <div className='hotel-card'>
            <div className='hotel-card-img'>
                <img className='hotel-img' src={img[0]} alt="Hotel"/>
            </div>
            <div className='hotel-card-info'>
                <h4>{name}</h4>
                <p>{ info['capacity'].map(i => i)}</p>
                <p>{info.airCondition}</p>
                <p>{info.cancellation} </p> <br/><br/>
                <div className='space-between ' >
                    <div>Rating: {rating} </div>
                    <div>  ${price}/Night </div>
                </div>
            </div>

        </div>
    );
};

export default HotelCard;