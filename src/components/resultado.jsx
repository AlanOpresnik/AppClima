import React from "react";
import useClima from "../hooks/useClima";
import clearImg from "../img/clear.png";
import cloudyImg from "../img/cloudy.png";
import rainyImg from "../img/rainy.png";
import snowyImg from "../img/snowy.png";
import nightImg from "../img/night.png"; // Imagen de la luna para la noche

const Resultado = () => {
  const { resultadoClima } = useClima();
  const { name, main, weather, sys } = resultadoClima;
  const kelvin = 273.15;

  // Función para determinar si es de noche según la hora actual y los datos de la API
  const esDeNoche = () => {
    const now = new Date().getTime() / 1000; // Hora actual en segundos desde el Epoch
    return now < sys.sunrise || now > sys.sunset;
  };



  // Define un objeto de mapeo para los estados del tiempo y sus imágenes correspondientes
  const weatherIcons = {
    "Clear": clearImg, // Despejado
    "Clouds": cloudyImg, // Nublado
    "Rain": rainyImg, // Lluvia
    "Snow": snowyImg, // Nieve
    // Agrega más estados del tiempo y nombres de archivos de imágenes según sea necesario
  };

  console.log(weatherIcons)
  console.log(weather[0].main)

  // Usa la función esDeNoche() para determinar si es de noche
  const weatherIcon = esDeNoche() ? nightImg : weatherIcons[weather[0].main] || clearImg;

  return (
    <div className="contenedor clima">
      <h2>El clima en {name} es:</h2>
      <div className="centerImg">
        <img className="imgClima" src={weatherIcon} alt="Weather Icon" />
      </div>
      <p>
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
      </p>
      <p>{weather[0].main}</p>
      <p>{weather[0].description}</p>
      <div className="temp_min_max">
        <p>
          Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
        <p>Humedad: {Math.round(main.humidity)} %</p>
        <p>Presión: {Math.round(main.pressure)} hPa</p>
      </div>
    </div>
  );
};

export default Resultado;
