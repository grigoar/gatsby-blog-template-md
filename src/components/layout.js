import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"
import * as layoutStyle from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyle.container}>
      <Header />
      <main className={layoutStyle.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
