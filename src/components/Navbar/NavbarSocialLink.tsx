import React, { FC } from 'react'

interface INavSocialLink {
  link: {
    id: number
    href: string
    className: string
  }
}

const NavSocialLink: FC<INavSocialLink> = ({ link }) => {
  const { id, href, className } = link
  return (
    <li key={id}>
      <a href={href} className="nav-icon" target="_blank" rel="noreferrer">
        <i className={className}></i>
      </a>
    </li>
  )
}

export default NavSocialLink
