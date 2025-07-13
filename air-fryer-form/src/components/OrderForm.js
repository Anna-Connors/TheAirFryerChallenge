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
        spidrPIN: '',

    });

    //PIN formatting
    const handlePinChange = (e) => {

        const input = e.target.value;

        //remove all non-digit characters
        const digitsOnly = input.replace(/\D/g, '');

        //limit to 16 digits
        const limitedDigits = digitsOnly.slice(0, 16);

        //add dashes every fourth digit
        const formatted = limitedDigits.replace(/(\d{4})(?=\d)/g, '$1-');

        setFormData({
            ...formData,
            spidrPIN: formatted
        });
    };

    //pin validation
    const isValidPin = () => {
        const digitsOnly = formData.spidrPIN.replace(/\D/g, '');
        return digitsOnly.length === 16;
    };


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

        //check if PIN is valid
        if (!isValidPin()) {
            alert('Please enter a valid 16-digit PIN');
            return;
        }

        console.log('Form Data: ', formData);
    };

    return (
        <div className="the-air-fryer">
            <h2 className="form-header">Spidr Air Fryer Order Form</h2>
            <form className="order-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label className='form-label'>First Name: </label>
                    <input className='form-input' name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                </div>
                <div className="form-field">
                    <label className='form-label'>Last Name: </label>
                    <input className='form-input' name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                </div>
                <div className="form-field">
                    <label className='form-label'>Phone: </label>
                    <input className='form-input' name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                </div>
                <div className="form-field">
                    <label className='form-label'>Email: </label>
                    <input className='form-input' name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                </div>
                <div className="form-field">
                    <label className='form-label'>Spidr PIN: </label>
                    <input className='form-input' name="spidrPIN" value={formData.spidrPIN} onChange={handlePinChange} placeholder="####-####-####-####" maxLength={19} />
                </div>
                <button type="submit" className="submit-button">SUBMIT</button>
            </form>

        </div>
    )
}

export default OrderForm