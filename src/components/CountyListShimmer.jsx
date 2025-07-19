import React from 'react'
import './ShimmerEffect.css'

function CountyListShimmer() {
  return (
    <div className='countries-container'>
        { Array.from({ length: 10}).map((ele, i) => {
            return <div key={i} className="country-card shimmer-effect"></div>
        }
        )
        }
    </div>
  )
}

export default CountyListShimmer