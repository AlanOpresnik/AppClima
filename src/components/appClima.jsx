import Formulario from "./formulario";
import Resultado from "./resultado";
import useClima from "../hooks/useClima";
import Loading from "./loading";

export const AppClima = () => {
  const { resultadoClima, cargando, noResultado } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {
            cargando ? <Loading /> :
             resultadoClima?.name ? <Resultado />
              : noResultado ? <p>{noResultado}</p>
              : <p>el clima se va a mostrar aqui</p>
              }
      </main>
    </>
  );
};

export default AppClima;
