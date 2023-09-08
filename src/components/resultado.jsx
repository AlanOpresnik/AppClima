import useClima from "../hooks/useClima"
const Resultado = () => {

    const {resultadoClima} = useClima()
    const {name,main} = resultadoClima
    const kelvin = 273.15
    console.log(resultadoClima)
  return (
    <div className="contenedor clima">
        <h2>el clima de {name} es:</h2>
        <p> {parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
        <div className="temp_min_max">
        <p>Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>
        <p>Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
        </div>
       
    </div>
  )
}

export default Resultado