import { useState } from 'react'
import RadioButton from './RadioButton'
import DisplayWeather from './DisplayWeather';
import './Weather.css'

const unitNames = {
  metric: 'Celsius',
  imperial: 'Fahrenheit',
  standard: 'Kelvin',
}

function Weather() {
  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('metric')
  const [data, setData] = useState(null)

  async function fetchWeather() {
    const apiKey = '1b55955da41917ca6f5dda369174a332'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`
    const res = await fetch(path)
    const json = await res.json()
    console.log(json)

    const temp = json.main.temp
    const feelsLike = json.main.feels_like
    const desc = json.weather[0].description
    setData({
      temp,
      feelsLike,
      desc,
    })
  }

  return(
    <div className='Weather'>
      {data && <DisplayWeather {...data} /> }

      <form onSubmit={e => {
        e.preventDefault()
        fetchWeather()
        }}>
        <div>
          <input 
            placeholder='Zip Code'
            value={zip}
            onChange={e => setZip(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </div>
        <select value={unit} onChange={e => setUnit(e.target.value)}>
          <option value='metric'>Celsius</option>
          <option value='imperial'>Fahrenheit</option>
          <option value='standard'>Kelvin</option>
        </select>

        
        <RadioButton
          label='Celsius'
          name='unit'
          checked={unit === 'metric'}
          onChange={() => setUnit('metric')}
        />
        <RadioButton
          label='Fahrenheit'
          name='unit'
          checked={unit === 'imperial'}
          onChange={() => setUnit('imperial')}
        />
        <RadioButton
          label='Kelvin'
          name='unit'
          checked={unit === 'standard'}
          onChange={() => setUnit('standard')}
        />
      </form>
    </div>
  )
}
export default Weather