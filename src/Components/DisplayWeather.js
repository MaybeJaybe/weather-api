function DisplayWeather(props) {
  const { temp, feelsLike, desc, cod, message } = props

  if (cod !== 200) {
    return (
      <div>{message}</div>
    )
  }
  return (
    <div>
      <h2>{temp}</h2>
      <small>Feels like: {feelsLike}</small>
      <p>{desc}</p>
    </div>
  )
}
export default DisplayWeather