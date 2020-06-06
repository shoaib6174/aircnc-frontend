import React from 'react';
import './WhosComing.css'

const WhosComing = (props) => {


    const clientInfo ={
        name: '',
        address: '',
        email:  '',
        mobile: '',
        request: ''
    }

    const handleChange = (e)=>{
        clientInfo[e.target.name] = e.target.value
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.changeData(clientInfo)
        props.hideShow('coming')
        props.submitData()
    }
    return (
        <div className='who-container'>
            <br/><br/>
            <h3  >Say hello to your host</h3>
            <br/>
            <p>Let the host know a little about yourself and why you're coming.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' onChange={handleChange} />
                <br/>
                <input type="text" name='address' placeholder='Address' onChange={handleChange} />
                <br/>
                <input type="text" name='mobile' placeholder='Mobile' onChange={handleChange} />
                <br/>
                <input type="text" name='email' placeholder='Email' onChange={handleChange} />
                <br/>
                <input type="text" name='request' placeholder='Any request?' onChange={handleChange} />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default WhosComing;