import React from 'react'
import Blog from "../assests/blogger.png"


function Logo({width = '100px'}) {
  return (
     <img src={Blog} style={{ width, height: "auto", display: "block" }} alt="logo" />
  )
}

export default Logo