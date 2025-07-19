import React, { useEffect, useState } from 'react';
import CountriesCard from './CountriesCard';
import data from '../data';
import CountyListShimmer from './CountyListShimmer';

function CountriesList({ query }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        setCountries(data)
    }, []);
    
  return (
    <div className='countries-container'>
        {
            countries.length ? countries.filter((ele) => ele.name.official.toLowerCase().includes(query.toLowerCase()) ||
            ele.region.toLowerCase().includes(query.toLowerCase())
            )
            .map((ele, index) => 
                <CountriesCard
                key={index}
                name={ele.name.official}
                flag={ele.flags.svg}
                population={ele.population}
                region={ele.region}
                capital={ele.capital?.[0]}
                data={ele}
                />
            ) 
            :
            <CountyListShimmer />
        }
    </div>
  )
}

export default CountriesList;