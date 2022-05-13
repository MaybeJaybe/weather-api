function DisplayWeather(props) {
  const { temp, feelsLike, desc, } = props
  return (
    <div>
      <h2>{temp}</h2>
      <small>Feels like: {feelsLike}</small>
      <p>{desc}</p>
    </div>
  )
}
export default DisplayWeather