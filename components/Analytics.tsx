'use client'
import { useEffect } from 'react'
import ClickChutney from '@click-chutney/analytics'

export default function Analytics() {
  useEffect(() => {
    ClickChutney.init('cc_1753962409259_fmawpj88sbh')
    ClickChutney.page()
  }, [])
  return null
}