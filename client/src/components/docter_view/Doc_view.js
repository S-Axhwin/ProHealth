import React, { useEffect } from 'react'
import DocCard from './DocCard'

const Doc_view = () => {
  useEffect(async()=>{
    fetch("")
  })
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <DocCard/>
    </div>
  )
}

export default Doc_view