import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from './country'

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  /* border: 1px solid red; */
  padding: 4em 2em;
`

function CountryList () {
  const [countryList, setCountryList] = useState([])
  useEffect(() => {
     fetch('https://restcountries.eu/rest/v2/all')
     .then(response => {
       return response.json()
     })
     .then(data => {
       setCountryList(data)
       console.log(data)
     })
     .catch(() => {
       console.log('bad, bad, bad')
     })
  }, [])

  return (
    <CountryListStyled>
      {
        countryList.map(({ alpha2Code, flag, name, population, region, capital }) => {
          return (
            <Country
              key={alpha2Code}
              flag={flag}
              name={name}
              populaion={population}
              region={region}
              capital={capital}
            />
          )
        })
      }
    </CountryListStyled>
  )
}

export default CountryList
