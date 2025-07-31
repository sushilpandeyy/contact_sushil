'use client'
import { useEffect } from 'react'
import ClickChutney from '@click-chutney/analytics'

export default function Analytics() {
  useEffect(() => {
    ClickChutney.init('cc_1753975111304_wvrbl479yc')
    ClickChutney.page()
  }, [])
  return null
}