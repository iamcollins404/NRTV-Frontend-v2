import React from 'react'

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

import UniversalContentLayout from "../../components/account/universalContentLayout"

function News() {
  return (
    <LoggedinAccountLayout>
      <UniversalContentLayout page="news" />
    </LoggedinAccountLayout>
  )
}

export default News