import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CountAlCarrito from "../ItemDetailContainer/CountAlCarrito";

//Importa el archivo de CSS
import style from "./ItemDetail.module.css"

const ItemDetail = ({ productoSeleccionado, cantidadProductos, onAdd }) => {
  return (
    <div>
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
                    letterSpacing: "3px",
                  }}
                >
                  Precio: ${productoSeleccionado.precio}
                </Typography>

                <CountAlCarrito
                  stock={productoSeleccionado.stock}
                  onAdd={onAdd}
                  initial={cantidadProductos}
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
    </div>
  );
};

export default ItemDetail;