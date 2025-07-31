'use client'
import { useEffect } from 'react'
import ClickChutney from '@click-chutney/analytics'

export default function Analytics() {
  useEffect(() => {
    ClickChutney.init('cc_1753960929211_uqo3ixvqt5g')
    ClickChutney.page()
  }, [])
  return null
}
