import { createContext, useState, useEffect } from "react";
import axios from "axios";
//crear el context

export const CategoriasContext = createContext();

//provider es donde se encuentras las funciones y state
const CategoriasProvider = (props) => {
  //craer el state del context
  const [categorias, guardarCategorias] = useState([]);
  //ejecutar el llamado a la api
  useEffect(() => {
    const obtnerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const Categorias = await axios(url);
      guardarCategorias(Categorias.data.drinks);
    };

    obtnerCategorias();
  }, []);
  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
