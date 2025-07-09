import React from 'react';
import CountriesCard from './CountriesCard';
import data from '../data';

function CountriesList({ query }) {
  return (
    <div className='countries-container'>
        {
            data ? data.filter((ele) => ele.name.official.toLowerCase().includes(query))
            .map((ele, index) => 
                <CountriesCard
                key={index}
                name={ele.name.official}
                flag={ele.flags.svg}
                population={ele.population}
                region={ele.region}
                capital={ele.capital?.[0]}
                />
            ) 
            :
            <p> No Countries </p>
        }
    </div>
  )
}

export default CountriesList;