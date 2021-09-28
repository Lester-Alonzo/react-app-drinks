import { createContext, useEffect, useState } from "react";
import axios from "axios";

//crear el context

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //state del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [informacion, guardarReceta] = useState({});
  //una ves que tenemos una receta llamar a la apio

  useEffect(() => {
    try {
      const obtenerReceta = async () => {
        if (!idreceta) return;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
        const resultado = await axios(url);
        guardarReceta(resultado.data.drinks[0]);
      };
      obtenerReceta();
    } catch (err) {
      console.error(err);
    }
  }, [idreceta]);
  return (
    <ModalContext.Provider
      value={{
        informacion,
        guardarIdReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
