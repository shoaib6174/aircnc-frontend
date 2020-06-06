import React from 'react';
import { useParams } from 'react-router-dom';

const Rules = (props) => {

    const {hotelid,guestsNo,arrival,departure} = useParams()
    const {name, rating, price} = props.hotelInfo
    const duration = () =>{
        const date1 = new Date(arrival);
        const date2 = new Date(departure);
        const Difference_In_Time = date2.getTime() - date1.getTime(); 
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
        return Difference_In_Days
    }
    
    return (
        <div>
            <h3>Review house rules</h3>
            <h6> {duration()} days in dhaka </h6>
            <div>
                <div>
                    {arrival} check-in
                </div>
                <div>
                    {departure} check-out
                </div>
            </div>
            <p>
                Self check-in with building staff
            </p>
            <hr/>
            <h4>Things to keep in mind</h4>
            <div>Suitable for children and infants</div>
            <div>Pets allowed</div>
            <div>No parties or events</div> <br/>
        </div>
    );
};

export default Rules;