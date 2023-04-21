import React, { FC } from 'react'

interface INavLink {
  link: {
    id: number
    href: string
    text: string
  }
}

const NavLink: FC<INavLink> = ({ link }) => {
  const { id, href, text } = link
  return (
    <li key={id}>
      <a href={href} className="nav-link">
        {` ${text} `}
      </a>
    </li>
  )
}

export default NavLink
