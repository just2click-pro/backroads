import React, { FC } from 'react'

interface IFooterLink {
  link: {
    id: number
    href: string
    text: string
  }
}

const FooterLink: FC<IFooterLink> = ({ link }) => {
  const { id, href, text } = link
  return (
    <li key={id}>
      <a href={href} className="footer-link">
        {text}
      </a>
    </li>
  )
}

export default FooterLink
