import React from 'react'

import styles from './DrupalMarkdownPost.module.scss'

const DrupalMarkdownPost = ({ title, fields }) => (
  <div className={styles.drupalMarkdownPost}>
    <h1 className={styles.title}>
      {title}
    </h1>
    <div className={styles.title} dangerouslySetInnerHTML={{ __html: fields.markdownBody.childMarkdownRemark.html }}></div>
  </div>
)

export default DrupalMarkdownPost