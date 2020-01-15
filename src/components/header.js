import { Link } from "gatsby"
import React from "react"

const activeStyle = {
  color: '#024487',
  fontWeight: 'bold',
}

const isPartiallyActive = ({
  isPartiallyCurrent
}) => {
  return isPartiallyCurrent
    ? { className: "active" }
    : null
}
const PartialNavLink = props => (
  <Link getProps={isPartiallyActive} {...props} />
)

const Header = () => (
  <header>
    <div className='title'>
      <h1>Brian Redmond</h1>
      <h2>Fine Art Painter &amp; Drawer</h2>
    </div>

    <ul className='menu'>
      <li><Link to="/" activeStyle={activeStyle}>Home</Link></li>
      <li>{PartialNavLink({ to: '/gallery', children: "Gallery" })}</li>
      <li><Link to="/about" activeStyle={activeStyle}>About Artist</Link></li>
      <li><Link to="/contact" activeStyle={activeStyle}>Contact</Link></li>
    </ul>
  </header>
)

export default Header
