import React from 'react'

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

import UniversalContentLayout from "../../components/account/universalContentLayout"

function Documentaries() {
  return (
    <LoggedinAccountLayout>
      <UniversalContentLayout page="documentaries" />
    </LoggedinAccountLayout>
  )
}

export default Documentaries