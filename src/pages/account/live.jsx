import React from 'react'

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

import UniversalContentLayout from "../../components/account/universalContentLayout"

function Live() {
  return (
    <LoggedinAccountLayout>
      <UniversalContentLayout page="Live TV And Shows" />
    </LoggedinAccountLayout>
  )
}

export default Live