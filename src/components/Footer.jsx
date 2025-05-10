import React from 'react'
import './styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Richard Avalos</div>
      <div className="footer-links">
        <div><strong>Call</strong><br/>909-996-8212</div>
        <div><strong>Write</strong><br/>RichardBobby.Avalos96@gmail.com</div>
        <div><strong>Follow</strong><br/>
          <a href="#">FB</a> · <a href="#">TW</a> · <a href="#">LI</a>
        </div>
      </div>
    </footer>
  )
}