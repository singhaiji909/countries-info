import React from 'react'
import './ShimmerEffect.css'

function CountyListShimmer() {
  return (
    <div className='countries-container'>
        { Array.from({ length: 10}).map((ele, i) => {
            return (
            <div key={i} className="country-card shimmer-card">
              <div className="flag-container"></div>
              <div className="card-text">
                <h3 className="card-title"></h3>
                <p></p>
                <p></p>
                <p></p>
            </div>
            </div>
        )}
        )
        }
    </div>
  )
}

export default CountyListShimmer