import React, { useState, useEffect } from 'react';
import './BookingForm.css'
import { useHistory } from 'react-router-dom';

const BookingForm = () => {
    
    const [formData, setFormData] = useState({
        location: '',
        arrival: '2020-06-05',
        departure: '2020-06-10',
        adults: 1,
        children: 0,
        babies: 0
    })
    const {location, arrival, departure, adults,children,babies} = formData

    const guestType = ['adults','children','babies']
    const handleChange = (e)=>{
        setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
    }
    const addGuest =(type)=>{
        
        setFormData({
			...formData,
			[type]: formData[type]+ 1,
		});
    }
    const minusGuest =(type)=>{
        if(formData[type] > 0){
            setFormData({
                ...formData,
                [type]: formData[type] - 1,
            });
        }
    }
    const history = useHistory()
    const handleSearch =()=>{
        const guestsNo = adults + children + babies
        history.push(`/hotelSelection/${guestsNo}/${arrival}/${departure}`)
    }
    return (
        <div className='booking-form'>
            <div className="input-item">
                <label htmlFor="location">Location:</label>
                <input 
                    type="text" 
                    name='location' 
                    value={location} 
                    onChange={handleChange} 
                    placeholder="Insert city"
                />
            </div>
            <div className="input-item">
                <label htmlFor="arrival">Arrival:</label>
                <input 
                    type="date" 
                    name='arrival' 
                    value={arrival} 
                    onChange={handleChange} 
                />
            </div>
            <div className="input-item">
                <label htmlFor="departure">Departure:</label>
                <input 
                    type="date" 
                    name='departure' 
                    value={departure} 
                    onChange={handleChange} 
                />
            </div>
            <div className='input-item'>
                <div className='guestNo'>
                    <div className='guestType'>
                        Adults
                    </div>
                    <div className="guestCount">
                         <span
                            onClick={()=>minusGuest('adults')}
                        >-</span>   {adults}
                        <span 
                        onClick={()=>addGuest('adults')}
                        >+</span>  
                    </div>
                </div>
            </div>
            <div className='input-item'>
                <div className='guestNo'>
                    <div className='guestType'>
                        children
                    </div>
                    <div className="guestCount">
                         <span
                            onClick={()=>minusGuest('children')}
                        >-</span> {children}
                        <span 
                        onClick={()=>addGuest('children')}
                        >+</span>  
                    </div>
                </div>
            </div>
            {guestType.map(g=>{
                return <div>
                    <div className='input-item'>
                <div className='guestNo'>
                    <div className='guestType'>
                        {g}
                    </div>
                    <div className="guestCount">
                         <span
                            onClick={()=>minusGuest(g)}
                        >-</span>  {formData[g]}
                        <span 
                        onClick={()=>addGuest(g)}
                        >+</span> 
                    </div>
                </div>
            </div>
                    </div>
            })}
            <div>
                <button onClick={handleSearch} > Search</button>
            </div>
        </div>
    );
};

export default BookingForm;