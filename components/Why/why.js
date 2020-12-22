import React from "react"
import { Link } from "gatsby"
import Button from "../Button/button"

import "../Why/why.scss"

const Why = ({ title, desc, btnText, btnLink, img, imgAlt }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link to={btnLink}>
        <Button>{btnText}</Button>
      </Link>
      <img className="img-fluid" src={img} alt={imgAlt} />
    </>
  )
}

export default Why
