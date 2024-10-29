'use client';
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
// this adds effect to the display of the figure or account balance in this case
    <div className='w-full' >
        <CountUp
        duration={1}
        decimal=","
        decimals={2}
        prefix="$"
        end={amount} />
    </div>
  )
}

export default AnimatedCounter