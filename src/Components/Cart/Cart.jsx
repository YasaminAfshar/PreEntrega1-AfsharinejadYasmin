
//Importar archivos complementarios
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

//Importa el archivo de CSS
import style from "./Cart.module.css"


//Importar libreria de íconos
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import UndoIcon from "@mui/icons-material/Undo";


const Item = styled(Paper)(() => ({
  backgroundColor: "#212121",
  padding: "10px",
  color: "white"
}));


const Cart = () => {
  return (
    <div className={style.containerCart}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1676764508/MULTIMEDIA/portada1_ltgooi.png"
          alt="Portada que comenta sobre el descuento que se aplica en caso de superar los $2.500 en tu compra"
          style={{
            width: "85%",
            margin: "30px 20px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
          }}
        />
      </div>

      <Box className={style.carritoCompras}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12} sx={{ margin: "20px 20px 0 20px" }}>
            <Item>
              <h1 className={style.title1}>Carrito de compras</h1>
            </Item>
          </Grid>

          <Grid item xs={12} sx={{ margin: "0 20px 0 20px" }}>
            <Item className={style.productosSeleccionados}>
              <h3 className={style.title2}>Productos Seleccionados</h3>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  startIcon={<DeleteIcon />}
                  sx={{
                    fontSize: "1.2em",
                    fontFamily: "'PT Sans Caption', sans-serif",
                  }}
                >
                  Vaciar carrito
                </Button>
              </Stack>
            </Item>
          </Grid>

          <Grid item xs={12} sx={{ margin: "0 20px 20px 20px" }}>
            <Item className={style.containerBoton}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  startIcon={<UndoIcon />}
                  sx={{
                    fontFamily: "'PT Sans Caption', sans-serif",
                    padding: "10px 15px",
                    margin: "0 10px ",
                  }}
                >
                  Volver al inicio
                </Button>
              </Link>

              <Button
                variant="contained"
                size="large"
                color="success"
                endIcon={<MonetizationOnIcon />}
                sx={{
                  fontFamily: "'PT Sans Caption', sans-serif",
                  padding: "10px 15px",
                  margin: "0 10px ",
                }}
              >
                Continuar Pago
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Cart
