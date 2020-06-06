import React, { useState, useEffect } from 'react';
import './CheckoutPage.css'
import { useParams } from 'react-router-dom';
import InfoCard from '../../InfoCard/InfoCard';
import WhosComing from '../../WhosComing/WhosComing'
import Rules from '../../Rules/Rules'
import Payment from '../../Payment/Payment'
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';

const CheckoutPage = () => {
    const {hotelid, guestsNo,arrival,departure} = useParams()
    const [showrules, setShowRules] = useState(true)
    const [showWhosComing, setShowWhosComing ] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const stripePromise = loadStripe('pk_test_hMsb3Ebw9yxBqRP1pR9GpOmG00DJ837Uiy');
    const [clientData, setClientData] = useState('')
    const [paymentData, setPaymentData] = useState('Pending')
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
 
//send this object to database
//don't change above this
    const payLoad = {
        hotelid,
        hotelName: hotelsInfo[hotelid]['name'],
        guestsNo,
        arrival,
        departure,
        clientData,
        paymentData
    }

    //backend dev added this code to pass payload to DB
    fetch('https://shrouded-badlands-14433.herokuapp.com/reservationInfo',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payLoad)
      })
      .then(res => res.json())
      .then(data => {
        console.log('sent', data);
       
      })




//don't change below this

    
    const hideShow = (type) =>{
        if(type === 'rules'){
            setShowRules(false)
            setShowWhosComing(true)
        }
        else if(type === 'coming'){
            setShowWhosComing(false)
            setShowPayment(true)
        }
        
    }
    



    return (
        <div className='checkout-page'>
            <div>
            <div>
                   <span style={{fontWeight: showrules? '700' : ''}}> 
                    Reviews house rules 
                   </span> >
                   <span style={{fontWeight: showWhosComing? '700' : ''}}> 
                   Who's coming ? 
                   </span> >
                   <span style={{fontWeight: showPayment? '700' : ''}}> 
                   Confirm and pay 
                   </span> 
            </div>
            <div className='checkout-description'>
                    {showrules ? 
                    <div>
                        <Rules  hotelInfo={hotelsInfo[hotelid]} /> 
                        <button onClick={()=>hideShow('rules')} >Continue</button>
                    </div>
                    
                    : ''}
                    {showWhosComing ? 
                    <div>
                        <WhosComing changeData = {setClientData} hideShow={hideShow} /> 
                    </div> : '' }
                    {showPayment ? <div className='payment-block'>
                        <Elements stripe={stripePromise}>
                            <Payment />
                        </Elements>
                    </div>  : '' }
                </div>
            </div>
            <div className className='checkout-card'>
                    <InfoCard price={hotelsInfo[hotelid]['price']} rating={hotelsInfo[hotelid]['rating']}  />
            </div>
        </div>
    );
};

export default CheckoutPage;