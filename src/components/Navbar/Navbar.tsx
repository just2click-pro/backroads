import { FC } from 'react'

import logo from '../../images/logo.svg'

import { externalLinks, pageLinks } from '../../data'

import NavLink from './NavbarLink'
import NavSocialLink from './NavbarSocialLink'

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <NavLink link={link} />
          ))}
        </ul>

        <ul className="nav-icons">
          {externalLinks.map((link) => (
            <NavSocialLink link={link} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
