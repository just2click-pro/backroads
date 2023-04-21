import { FC } from 'react'

interface ITitle {
  title: string
  subTitle: string
}

const Title: FC<ITitle> = ({ title, subTitle }) => {
  return (
    <div className="section-title" id="main-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}

export default Title
