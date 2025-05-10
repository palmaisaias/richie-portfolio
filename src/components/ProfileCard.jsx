import React from 'react'
import SocialIcons from './SocialIcons'
import './styles/ProfileCard.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function ProfileCard() {
  return (
    <motion.div
      className="profile-card"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img src="/assets/profile.avif" alt="Richie Avalos" className="profile-pic"/>
      <h2 className="profile-name">Richard B. Avalos</h2>
      <p className="profile-title">Business Strategy & Retail Leader</p>
      <SocialIcons />
    </motion.div>
  )
}