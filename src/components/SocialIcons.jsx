import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'
import './styles/SocialIcons.css'

export default function SocialIcons() {
  const links = [
    { icon: <FaFacebookF />,  url: '#' },
    { icon: <FaTwitter />,   url: '#' },
    { icon: <FaLinkedinIn />,url: '#' },
    { icon: <FaInstagram />, url: '#' },
  ]
  return (
    <div className="social-icons">
      {links.map((l,i) => (
        <a key={i} href={l.url} target="_blank" rel="noopener">
          {l.icon}
        </a>
      ))}
    </div>
  )
}