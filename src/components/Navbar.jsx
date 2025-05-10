import { Link, useLocation } from 'react-router-dom'
import './styles/Navbar.css'


export default function Navbar() {
  const { pathname } = useLocation()
  const navItems = [
    { to: '/',     label: 'About Me' },
    { to: '/resume',   label: 'Resume' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact',  label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-accent">■</span>
        <span className="navbar-name">Richie Avalos</span>
        <span className="navbar-role">/ Business Strategy & Retail Leader</span>
      </div>
      <nav className="navbar-links">
        {navItems.map(({to,label}) => (
          <Link
            key={to}
            to={to}
            className={ pathname === to ? 'active' : '' }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
)
}