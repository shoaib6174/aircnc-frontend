import React from 'react';
import './HotelSelection.css'
import { useParams, useHistory } from 'react-router-dom';
const HotelSelection = () => {

    const {guestsNo,arrival,departure} = useParams()
    const history = useHistory()
    const hotelSelect = (hotel) =>{
        history.push(`/hotel/${guestsNo}/${hotel}/${arrival}/${departure}`)
    }


    return (
        <div>
            Guests no : {guestsNo}
            <div>
                Hotel 1
                <button onClick={()=>{hotelSelect('1')}} >Select</button>
            </div>
            <div>
                Hotel 2
                <button onClick={()=>{hotelSelect('2')}} >Select</button>
            </div>
            <div>
                Hotel 3
                <button onClick={()=>{hotelSelect('3')}} >Select</button>
            </div>
        </div>
    );
};

export default HotelSelection;