import { FC } from 'react'

interface IFooterSocialLink {
  link: {
    id: number
    href: string
    className: string
  }
}

const FooterSocialLink: FC<IFooterSocialLink> = ({ link }) => {
  const { id, href, className } = link
  return (
    <li key={id}>
      <a href={href} className="footer-icon" target="_blank" rel="noreferrer">
        <i className={className}></i>
      </a>
    </li>
  )
}

export default FooterSocialLink
