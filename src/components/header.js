import React, { useState, useEffect } from "react"

import * as headerStyle from "./header.module.scss"
import { Link } from "gatsby"

const Header = () => {
  const [theme, setTheme] = useState({ light: "light", dark: "", orient: "" })

  useEffect(() => {
    document.body.className = `${theme.light} ${theme.dark} ${theme.orient}`
  }, [theme])
  const themeDark = () => {
    setTheme({ light: "", dark: "dark", orient: "" })
  }
  const themeLight = () => {
    setTheme({ light: "light", dark: "", orient: "" })
  }
  const themeOrient = () => {
    setTheme({ light: "", dark: "", orient: "orient" })
  }

  return (
    <header>
      <h1 className={headerStyle.headerTitle}>grigoar template</h1>
      <nav>
        <ul className={headerStyle.navContainer}>
          <div className={headerStyle.containerMain}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div className={headerStyle.containerThemes}>
            <li>
              <button onClick={themeLight}>Light</button>
            </li>
            <li>
              <button onClick={themeDark}>Dark</button>
            </li>
            <li>
              <button onClick={themeOrient}>Orient</button>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
