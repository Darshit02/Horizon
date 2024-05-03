"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount} : {amount : number}) => {
  return (
    <div className='w-full'>
        <CountUp end={amount} prefix='₹' duration={2} decimals={2} separator="," />
    </div>
  )
}

export default AnimatedCounter