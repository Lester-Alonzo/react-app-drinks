import { createContext, useState, useEffect } from "react";

import axios from "axios";
export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, guardarRecetas] = useState([]);
  const [busquda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, guardarConsultar] = useState(false);
  const { nombre, categoria } = busquda;
  useEffect(() => {
    try {
      const obtenerRecetas = async () => {
        if (consultar) {
          const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
          const resultado = await axios(url);
          guardarRecetas(resultado.data.drinks);
        }
      };
      obtenerRecetas();
    } catch (err) {
      console.error(err);
    }
  }, [busquda]);
  return (
    <RecetasContext.Provider
      value={{ recetas, buscarRecetas, guardarConsultar }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};
export default RecetasProvider;
