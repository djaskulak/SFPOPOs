// src/POPOSDetails.js

import React from 'react'
import './POPOSDetails.css'
import data from './sfpopos-data.json'
import POPOSFeatureList from './POPOSFeatureList'

function POPOSDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, hours, features, geo } = data[id]
  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }</p>
        <POPOSFeatureList features={features}/>
        <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
      </div>
    </div>
  )
}

export default POPOSDetails