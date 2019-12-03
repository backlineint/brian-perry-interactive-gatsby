import React from 'react'
import {Helmet} from "react-helmet";

import styles from './DrupalMarkdownPost.module.scss'

// TODO - Refactor to use container component
const DrupalMarkdownPost = ({ title, fields, business }) => {
  if (business) {
    return(
      <div className={styles.drupalMarkdownPost}>
        <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:400,700&display=swap" rel="stylesheet" />
        </Helmet>
        <h1 className={styles.title}>
          {title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: fields.markdownBody.childMarkdownRemark.html }}></div>
      </div>
    )
  }
  else {
    return(
      <div className="nes-container with-title">
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
          <link href="https://unpkg.com/nes.css@2.2.1/css/nes.min.css" rel="stylesheet" />
        </Helmet>
        <p className="title">Maybe date goes here</p>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: fields.markdownBody.childMarkdownRemark.html }}></div>
      </div>
    )
  }
}

export default DrupalMarkdownPost