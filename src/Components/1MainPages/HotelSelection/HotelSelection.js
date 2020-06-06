import React from 'react';
import './HotelSelection.css'
import { useParams, useHistory } from 'react-router-dom';
import HotelCard from '../../HotelCard/HotelCard';
const HotelSelection = () => {

    const {guestsNo,arrival,departure} = useParams()
    const history = useHistory()
    const hotelSelect = (hotel) =>{
        history.push(`/hotel/${guestsNo}/${hotel}/${arrival}/${departure}`)
    }
    const hotelsInfo = [
        {
            name: ' Rajanigandha Suites',
            price: 52,
            rating: 4.8,
            img: ['https://i.imgur.com/Q6sJJFI.jpg']  
        }, 
        {
            name: 'Apartment in Lost Panorama',
            price: 52,
            rating: 4.8,
            img: ['https://i.imgur.com/HhcWged.jpg']  
        },
        {
            name: 'Apartment in Lost Panorama',
            img: ['https://i.imgur.com/wjv2Fcw.jpg'],
            price: 52,
            rating: 4.8  
        }
    ]



    return (
        <div>
            {
                hotelsInfo.map((hotelInfo,index)=>{
                    return<div onClick={()=>{hotelSelect(index)}}>
                            <HotelCard  hotelInfo={hotelInfo} />
                            </div>
                })
            }
        </div>
    );
};

export default HotelSelection;