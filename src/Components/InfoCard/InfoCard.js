import React, { useState, useEffect } from 'react';
import './InfoCard.css'
import { useParams, useHistory } from 'react-router-dom';
const InfoCard = (props) => {
    const {hotelid,guestsNo,arrival,departure} = useParams()
    const {price, rating} = props
    
    const duration = () =>{
        const date1 = new Date(arrival);
        const date2 = new Date(departure);
        const Difference_In_Time = date2.getTime() - date1.getTime(); 
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
        return Difference_In_Days
    }
   
    return (
        <div className='info-card'>
            <div>
                <div className="line">
                    <div>Room Charge:</div>
                    <div>${price}/day </div>
                </div>
                <div className="line">
                    <div>
                            Rating: 
                    </div>
                    <div>
                        {rating}
                    </div>
                </div>
                <div className="line">
                    <div>
                        From:
                    </div>
                    <div>
                    <input type="date" value={arrival}/>
                    </div>
                </div>
                <div className="line">
                    <div>  To: </div>
                    <div>
                    <input type="date" value={departure}/>
                    </div>
                </div>
                
                 <br/><br/>
                <div className="line info-item">
                    <div>Total Guests: </div>
                    <div>{guestsNo}</div>
                </div>
                <div className="info-item line">
                    <div>${price} X {duration()} </div>
                    <div>${price*duration()}</div>
                </div>
                <div className="info-item line">
                    <div> Cleaning fee </div>
                    <div>${10}</div>
                </div>
                <div className="info-item line">
                    <div>Service Fee(5%):</div>
                    <div>${price*.05*duration()} </div>
                </div>
                <div className="info-item line">
                    <div> <strong>Total:</strong> </div>
                    <div>  <strong>${price*1.05*duration()+10}</strong> </div>
                </div>
            
            
            </div>

        </div>
    );
};

export default InfoCard;