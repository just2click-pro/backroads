import { FC } from 'react'

import { externalLinks, pageLinks } from '../../data'

import FooterLink from './FooterLink'
import FooterSocialLink from './FooterSocialLink'

const Footer: FC = () => {
  return (
    <footer id="footer" className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => (
          <FooterLink link={link} />
        ))}
      </ul>
      <ul className="footer-icons">
        {externalLinks.map((link) => (
          <FooterSocialLink link={link} />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company demo
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
