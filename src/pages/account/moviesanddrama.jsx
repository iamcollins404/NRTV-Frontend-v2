import React from 'react'

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

import UniversalContentLayout from "../../components/account/universalContentLayout"

function MoviesandDrama() {
  return (
    <LoggedinAccountLayout>
      <UniversalContentLayout page="moviesanddrama" />
    </LoggedinAccountLayout>
  )
}

export default MoviesandDrama