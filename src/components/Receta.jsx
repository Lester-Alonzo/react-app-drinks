import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Receta = ({ receta }) => {
  const { informacion, guardarIdReceta } = useContext(ModalContext);

  //configuracion del modal de material ui
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    guardarIdReceta(null);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img
          src={receta.strDrinkThumb}
          alt={`imagen de ${receta.strDrink}`}
          className="card-img-top"
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h2 id="modal-title">{informacion.strDrink}</h2>
              <h3 className="mt-4">Intrucciones de Preparacion</h3>
              <p>{informacion.strInstructions}</p>
              <img
                src={informacion.strDrinkThumb}
                alt={informacion.strDrink}
                className="img-fluid my-4"
              />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Receta;
