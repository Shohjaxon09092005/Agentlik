import React, { useState } from 'react';
import '../style/formdata.css'
function FormData() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        workplace: '',
        position: '',
        subject: '',
        message: '',
        captcha: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., send to backend)
        console.log('Form data submitted:', formData);
    };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
            <label>F.I.Sh *</label>
            <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="F.I.Sh"
            />
        </div>
        <div className="form-group">
            <label>Elektron pochta *</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Elektron pochta"
            />
        </div>
        <div className="form-group">
            <label>Telefon *</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+998 97 000-00-00"
            />
        </div>
        <div className="form-group">
            <label>Manzil</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Manzil"
            />
        </div>
        <div className="form-group">
            <label>Ish joyi</label>
            <input
                type="text"
                name="workplace"
                value={formData.workplace}
                onChange={handleChange}
                placeholder="Ish joyi"
            />
        </div>
        <div className="form-group">
            <label>Lavozim</label>
            <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Lavozim"
            />
        </div>
        <div className="form-group">
            <label>Savol mavzusi *</label>
            <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Savol mavzusi"
            />
        </div>
        <div className="form-group">
            <label>Savol matni (3000 belgigacha) *</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Matn kriting"
            />
        </div>
        <div className="form-group captcha-group">
            <label>Spamdan himoya *</label>
            <div className="captcha-container">
                <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                    placeholder="Captcha kiriting"
                />
                <button type="button" className="refresh-captcha">⟳</button>
            </div>
        </div>
        <button type="submit" className="submit-btn">Yuborish</button>
    </form>
</div>
  )
}

export default FormData
