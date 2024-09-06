import React, { useEffect, useState } from 'react'
//import countriesData from '../countriesData'
import CountryCard from './CountryCard'

const CountriesList = ({query}) => {

  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      setCountriesData(data)
    })

    const intervalId = setInterval(() => {
      console.log('running List component...');
    },[1000])

    console.log(intervalId);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
    <div className="countries-container">
      {countriesData.filter((country) => country.name.common.toLowerCase().includes(query))
      .map((country) => {
        return (
          //console.log(country)
          <CountryCard 
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          />
        )
      })}
    </div>
    </>
  )
}

export default CountriesList