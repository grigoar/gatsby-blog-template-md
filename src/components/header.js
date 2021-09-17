import React, { useState, useEffect } from "react"
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
      <h1>Scoala de soferi Nath Grigore</h1>
      <nav>
        <ul>
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
          <li>
            <button onClick={themeLight}>Light</button>
          </li>
          <li>
            <button onClick={themeDark}>Dark</button>
          </li>
          <li>
            <button onClick={themeOrient}>Orient</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
