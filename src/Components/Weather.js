import { useState } from 'react'
import './Weather.css'

function Weather() {
  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('Celsius')

  return(
    <div className="Weather">
      <h1>Forecast for {zip}</h1>
      <h2>Current unit: {unit}</h2>
      <form>
        <div>
          <input 
            placeholder="Zip Code"
            value={zip}
            onChange={e => setZip(e.target.value)}
          />
          <button>Submit</button>
        </div>
        <select onChange={e => setUnit(e.target.value)}>
          <option value="Celsius">Metric</option>
          <option value="Fahrenheit">Imperial</option>
          <option value="Kelvin">Base</option>
        </select>
      </form>
    </div>
  )
}
export default Weather