import React from 'react'

import '../../../components/global.scss'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <p>Shadowing Layout Just for Styles</p>
    <div className={styles.postWrapper}>
      <article>
        {children}
      </article>
    </div>
  </div>
)

export default Layout