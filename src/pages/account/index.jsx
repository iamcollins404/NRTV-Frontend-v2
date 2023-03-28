import React from 'react'

// import components
import LoggedinAccountLayout from "../../components/account/loggedInLayout"

import UniversalContentLayout from "../../components/account/universalContentLayout"

function AccountHome() {
  return (
    <LoggedinAccountLayout>
      <UniversalContentLayout page="Browse" />
    </LoggedinAccountLayout>
  )
}

export default AccountHome