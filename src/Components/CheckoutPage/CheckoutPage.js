import React, { useState } from 'react';
import './CheckoutPage.css'
import { useParams } from 'react-router-dom';
import InfoCard from '../InfoCard/InfoCard';
import WhosComing from '../WhosComing/WhosComing'
import Rules from '../Rules/Rules'
import Payment from '../Payment/Payment'
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';

const CheckoutPage = () => {
    const {id, guestsNo} = useParams()
    const [showrules, setShowRules] = useState(true)
    const [showWhosComing, setShowWhosComing ] = useState(false)
    const [showPayment, setShowPayment] = useState(false)

    const stripePromise = loadStripe('pk_test_hMsb3Ebw9yxBqRP1pR9GpOmG00DJ837Uiy');
    
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
            <div className='checkout-description'>
                    description
                    {showrules ? 
                    <div>
                        <Rules/> 
                        <button onClick={()=>hideShow('rules')} >Continue</button>
                    </div>
                    
                    : ''}
                    {showWhosComing ? 
                    <div>
                        <WhosComing/> 
                        <button onClick={()=>hideShow('coming')} >Continue</button>
                    </div> : '' }
                    {showPayment ? <div className='payment-block'>
                        <Elements stripe={stripePromise}>
                            <Payment />
                        </Elements>
                    </div>  : '' }
                    
                    
                    
            </div>
            <div className className='checkout-card'>
                    <InfoCard />
            </div>
        </div>
    );
};

export default CheckoutPage;