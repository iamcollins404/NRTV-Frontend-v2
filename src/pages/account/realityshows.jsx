import React from 'react'

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

import UniversalContentLayout from "../../components/account/universalContentLayout"

function Reality() {
  return (
    <LoggedinAccountLayout>
      <UniversalContentLayout page="realityshows"/>
    </LoggedinAccountLayout>
  )
}

export default Reality