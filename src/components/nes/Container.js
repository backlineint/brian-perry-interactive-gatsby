import React from 'react'
import {Helmet} from "react-helmet";

// TODO - abstract helmet into NES helmet.
// TODO - create props to toggle between business and pleasure themes. Actual toggle should be business/pleasure

const Container = () => (
  <div className="nes-container is-dark with-title">
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
      <link href="https://unpkg.com/nes.css@2.2.1/css/nes.min.css" rel="stylesheet" />
    </Helmet>
    <p className="title">Container.is-dark</p>
    <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
  </div>
)

export default Container