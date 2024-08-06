import React from 'react'
import InsuranceType from './InsuranceType'
import { useEffect } from 'react'
const Insurance = () => {
  useEffect(() => {
    let insuranceType = localStorage.getItem('insuranceType') || '';
},[])

  return (
    <div>
      <InsuranceType />
    </div>
  )
}

export default Insurance