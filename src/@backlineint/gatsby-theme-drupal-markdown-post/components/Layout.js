import React from "react"

import styles from "./Layout.module.scss"

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <p>Gatsby Drupal Markdown Post Themes</p>
    {children}
  </div>
)

export default Layout