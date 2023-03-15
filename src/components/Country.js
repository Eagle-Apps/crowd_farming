import React, { useState, useEffect } from 'react'

const Country = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const headers = new Headers()
      headers.append('X-CSCAPI-KEY', 'API_KEY')

      const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
      }

      const response = await fetch(
        'https://api.countrystatecity.in/v1/countries',
        requestOptions
      )
      const data = await response.json()
      setCountries(data)
    }

    fetchCountries()
  }, [])

  return (
    <div>
      {countries.map((country) => (
        <div key={country.iso2}>
          <h2>{country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
        </div>
      ))}
    </div>
  )
}

export default Country
