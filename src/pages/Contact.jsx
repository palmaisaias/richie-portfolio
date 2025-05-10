import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: hook up your API
    setStatus('SUCCESS');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <p>
          I'd love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <ul>
          <li><FaPhone /> <a href="tel:9099968212">909-996-8212</a></li>
          <li><FaEnvelope /> <a href="mailto:RichardBobby.Avalos96@gmail.com">RichardBobby.Avalos96@gmail.com</a></li>
          <li><FaMapMarkerAlt /> Chino Hills, CA</li>
        </ul>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="field-group">
          <div className="field">
            <input
              type="text"
              required
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="field">
            <input
              type="email"
              required
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>

        <div className="field">
          <textarea
            required
            id="message"
            rows="6"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <label htmlFor="message">Your Message</label>
        </div>

        <button type="submit" className="form-submit">
          {status === 'SUCCESS' ? 'Sent!' : 'Send Message'}
        </button>

        {status === 'SUCCESS' && (
          <motion.div
            className="status-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Thanks for reaching out!
          </motion.div>
        )}
      </motion.form>
    </div>
);
}