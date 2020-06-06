import React from 'react';
import './Hotel.css'
import { useParams, useHistory } from 'react-router-dom';
import InfoCard from '../../InfoCard/InfoCard';

const Hotel = () => {
    const {hotelid,guestsNo,arrival,departure} = useParams()
    const history = useHistory()
    const reserve = (hotel) =>{
        history.push(`/checkout/${guestsNo}/${hotelid}/${arrival}/${departure}`)
    }
    const hotelsInfo = [
        {
            name: 'Apartment in Lost Panorama',
            price: 52,
            rating: 4.8  
        }, 
        {
            name: 'Apartment in Lost Panorama',
            price: 52,
            rating: 4.8  
        },
        {
            name: 'Apartment in Lost Panorama',
            price: 52,
            rating: 4.8  
        }
    ]

    const {name, rating, price} = hotelsInfo[hotelid]
    

    return (
        <div className="hotel">
            
            <div className='hotel-description'>
                <div>
                    <h2> {name} </h2>
                    <p>Dhaka Bangladesh</p> <br/>
                    <p>4 Guests   2 bedrooms    2 beds  2 baths</p>
                </div>
                <br/>
                <div>
                    <div>
                        <div className='slightly-bold'>
                            Entire Home
                        </div>
                        <div> <p>
                            You will have the whole apartment to yourself. 
                            </p>
                        </div>
                    </div> <br/>
                   <div>
                        <div className='slightly-bold'>
                            Self Check-in
                        </div>
                        <div> <p>
                            You can check-in with the doorman
                            </p>
                        </div>
                    </div> <br/>
                    <div>
                        <div className='slightly-bold'>
                            Sparkling clean
                        </div>
                        <div> <p>
                            10 recent guests said this place was sparkling clean.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='room-description'>
                    <p>
                    Situated 400 m from Independent University Bangladesh, Blue Star Sun Service Apartment features accommodation with a shared lounge, a terrace and a 24-hour front desk for your convenience.

                    Each unit features a balcony, a fully equipped kitchen with an oven, a fireplace, a seating area with a sofa, a TV and a private bathroom with shower. <br/>

                    A à la carte breakfast is available each morning at the apartment. <br/>

                    A car rental service is available at Blue Star Sun Service Apartment.
                    </p>
                </div>
            </div>
            

            <div className='reserve-card'>
                <button onClick={reserve} >Book Now</button>
                <InfoCard price={price} rating={rating} />
                
            </div>
        </div>
    );
};

export default Hotel;