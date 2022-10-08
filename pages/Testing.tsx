import React from 'react'
import dynamic from 'next/dynamic'

 const Canva = dynamic(() => import('../components/Canva'), {
   ssr: false,
 })

function Testing() {
  return (
    <div><Canva /></div>
  )
}

export default Testing