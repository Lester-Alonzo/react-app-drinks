import { useContext, useState } from "react";
import { CategoriasContext } from "../context/Categorias";
import { RecetasContext } from "../context/RecetasContext";
const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  //funcion para leer los contenidos
  const obtenerReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsultar(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca Bebidas por Categoria o Ingrediente:</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={obtenerReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerReceta}
          >
            <option value="">--Seleciona Categoria--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <button type="submit" className="btn btn-block btn-primary">
            Buscar Bebidas
          </button>
        </div>
      </div>
    </form>
  );
};
export default Formulario;
