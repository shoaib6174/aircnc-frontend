import React from 'react';
import './Homepage.css'
import BookingForm from '../../BookingForm/BookingForm';

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <BookingForm/>
        </div>
    );
};

export default Homepage;