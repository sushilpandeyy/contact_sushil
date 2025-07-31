'use client'
import { useEffect } from 'react'
import ClickChutney from '@click-chutney/analytics'

export default function Analytics() {
  useEffect(() => {
    ClickChutney.init('cc_1753962840054_9d7rrctqzjb')
    ClickChutney.page()
  }, [])
  return null
}