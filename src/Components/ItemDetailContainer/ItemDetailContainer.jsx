
//Importar archivos complementarios
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useParams } from "react-router-dom";

import { productos } from "../../productsMock";

import CountAlCarrito from "./CountAlCarrito";

//Importar libreria de íconos
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

//Importa el archivo de CSS
import style from "./ItemDetailContainer.module.css"


const ItemDetailContainer = (element) => {

  const { id } = useParams();

  const productoSeleccionado = productos.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(
      `Se agrego al carrito ${cantidad} productos que corresponden al elemento: ${productoSeleccionado.nombre} `
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={style.containerDetail}>
        <div>
          <div className={style.detailProduct}>
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.descripcion}
            />
            <div className={style.infoContenido}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  marginTop: "30px",
                  textShadow: "2px -2px 3px #000000",
                  textDecoration: "3px underline",
                }}
              >
                {productoSeleccionado.nombre}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: "'PT Serif', serif",
                  marginTop: "30px",
                  fontSize: "2em",
                  textAlign: "center",
                }}
              >
                ${productoSeleccionado.precio}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: "'PT Serif', serif",
                  marginTop: "30px",
                  fontSize: "2em",
                  textAlign: "center",
                }}
              >
                Stock disponible: {productoSeleccionado.stock} productos
              </Typography>
              <CountAlCarrito
                stock={productoSeleccionado.stock}
                onAdd={onAdd}
              />
              <Typography
                variant="etiqueta"
                component="h2"
                sx={{
                  fontFamily: "'PT Serif', serif",
                  fontSize: "1.5em",
                  textAlign: "center",
                  bgcolor: "#ef9a9a",
                  marginTop: "10px",
                  marginBottom: "20px",
                  padding: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
                }}
              >
                Descripción del producto: {productoSeleccionado.descripcion}.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default ItemDetailContainer