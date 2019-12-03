import React from 'react'

import '../../components/global.scss'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <nav>
      Name in Crazy Font
    </nav>
    <div className={styles.postWrapper}>
      <div className={styles.article}>
        {children}
      </div>
    </div>
  </div>
)

export default Layout