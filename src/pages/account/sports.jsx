import React from 'react'

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

import UniversalContentLayout from "../../components/account/universalContentLayout"

function Sports() {
  return (
    <LoggedinAccountLayout>
      <UniversalContentLayout page="sports" />
    </LoggedinAccountLayout>
  )
}

export default Sports