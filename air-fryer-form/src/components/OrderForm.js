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
                    <input className='form-input' name="spidrPIN" value={formData.spidrPIN} onChange={handleChange} placeholder="####-####-####-####" maxLength={19} />
                </div>
                <button type="submit" className="submit-button">SUBMIT</button>
            </form>

        </div>
    )
}

export default OrderForm