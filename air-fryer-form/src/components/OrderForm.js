import React, { useState } from 'react'


const OrderForm = () => {
    //create form, initialize empty string
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        //research shows avg air fryer cost is $80-200; picking middle
        productCost: 140.00,
        SpidrPIN: '',

    });

    //handle form data
    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    //handle submission of form data
    //display form data on console
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data: ', formData);
    };

    return (
        <div className="the-air-fryer">
            <h2 className="form-header">Spidr Air Fryer Order Form</h2>
            <form className="order-form" onSubmit={handleSubmit}>
                <input className='form-input' name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                <input className='form-input' name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                <input name="SpidrPin" value={formData.SpidrPIN} onChange={handleChange} placeholder="####-####-####-####" maxLength={19} />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default OrderForm