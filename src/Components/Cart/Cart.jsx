//Importar archivos complementarios
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Checkout from "../Checkout/Checkout";
import Swal from "sweetalert2";
import CompraFinalizada from "../Checkout/CompraFinalizada";

import { Link } from "react-router-dom";

import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

//Importa el archivo de CSS
import style from "./Cart.module.css";

//Importar libreria de íconos
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import UndoIcon from "@mui/icons-material/Undo";


const Item = styled(Paper)(() => ({
  backgroundColor: "#212121",
  padding: "10px",
  color: "white",
}));

const Cart = () => {
  const {
    cart,
    vaciarCarrito,
    descuento,
    precioTotalCarrito,
    precioFinal,
    eliminarProducto,
  } = useContext(CartContext);

  const clearCarrito = () => {
    Swal.fire({
      title: "¿Estás seguro/a de vaciar el carrito?",
      text: "Se eliminaran todos los productos del carrito por completo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero vaciarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Realizado!", "El carrito se ha vaciado con éxito", "success")
      }
    });
  }

  const [showCheckout, setShowCheckout] = useState(false)
  const [orderId, setOrderId] = useState(null)

  if (orderId){
    return (
        <CompraFinalizada order={orderId}/>
    )
  }

  return (
    <div>
      {!showCheckout ? (
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
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      startIcon={<UndoIcon />}
                      sx={{
                        fontSize: "1em",
                        fontFamily: "'PT Sans Caption', sans-serif",
                        padding: "10px 15px",
                        margin: "0 10px ",
                      }}
                    >
                      Seguir comprando
                    </Button>
                  </Link>
                </Item>
              </Grid>

              <div style={{ width: "100%" }}>
                {cart.length === 0 ? (
                  <div style={{ margin: "60px auto", width: "80%" }}>
                    <img
                      src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1679961216/MULTIMEDIA/cartEmpty-20-10-2020_epadm3.png"
                      alt="Imágen sobre el carrito vacio"
                      style={{ margin: "auto", display: "flex"}}
                    />
                  </div>
                ) : (
                  <div>
                    <div style={{ width: "100%" }}>
                      {cart.map((producto) => {
                        return (
                          <Grid
                            key={producto.id}
                            item
                            xs={12}
                            sx={{ margin: "20px 20px 20px 20px" }}
                          >
                            <Item
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <div
                                key={producto.id}
                                className={style.listaProductos}
                              >
                                <img
                                  className={style.cartImg}
                                  src={producto.imagen}
                                  alt={producto.descripcion}
                                />
                                <h3>{producto.nombre}</h3>
                                <h4>Cantidad: {producto.quantity}</h4>
                                <h4>$ {producto.precio}</h4>
                                <h4>
                                  {producto.quantity} X ${" "}
                                  {producto.precio * producto.quantity}
                                </h4>
                                <Button
                                  variant="contained"
                                  color="error"
                                  size="small"
                                  startIcon={<DeleteIcon />}
                                  style={{
                                    fontSize: "1.4em",
                                    fontFamily: "'PT Sans Caption', sans-serif",
                                    margin: "10px 0",
                                  }}
                                  onClick={() => eliminarProducto(producto.id)}
                                >
                                  Eliminar
                                </Button>
                              </div>
                            </Item>
                          </Grid>
                        );
                      })}
                    </div>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        margin: "0 20px 10px 50px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Item className={style.priceSubtotal}>
                        <h5>Subtotal : </h5>
                        <h5
                          style={{
                            fontSize: "1.3em",
                            letterSpacing: "4px",
                            padding: "5px 0",
                          }}
                        >
                          $ {precioTotalCarrito()}
                        </h5>
                      </Item>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        margin: "0 20px 10px 50px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Item className={style.descuento}>
                        <p style={{ padding: "10px 0" }}>{descuento()}</p>
                      </Item>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        margin: "0 20px 20px 50px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Item className={style.priceSubtotal}>
                        <h5>Total : </h5>
                        <h5
                          style={{
                            fontSize: "1.3em",
                            letterSpacing: "4px",
                            padding: "5px 0",
                          }}
                        >
                          $ {precioFinal()}
                        </h5>
                      </Item>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: "10px 50px 20px 50px" }}>
                      <Item style={{ padding: "20px 0" }}>
                        <div className={style.mediosPago}>
                          <h3>MEDIOS DE PAGO:</h3>
                          <img
                            src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1679273924/MULTIMEDIA/img/mediosPago_gdzj5d.png"
                            alt=""
                          />
                        </div>
                      </Item>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        margin: "0 20px 20px 20px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Item className={style.containerBoton}>
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            margin: "10px",
                          }}
                        >
                          <Button
                            variant="contained"
                            color="error"
                            size="large"
                            startIcon={<DeleteIcon />}
                            sx={{
                              fontSize: "1.13em",
                              fontFamily: "'PT Sans Caption', sans-serif",
                              padding: "10px 15px",
                            }}
                            onClick={clearCarrito}
                          >
                            Vaciar carrito
                          </Button>
                        </Stack>

                        <Button
                          variant="contained"
                          size="large"
                          color="success"
                          endIcon={<MonetizationOnIcon />}
                          sx={{
                            fontSize: "1.13em",
                            fontFamily: "'PT Sans Caption', sans-serif",
                            padding: "10px 15px",
                            margin: "0 10px ",
                          }}
                          onClick={() => setShowCheckout(true)}
                        >
                          Continuar Pago
                        </Button>
                      </Item>
                    </Grid>
                  </div>
                )}
              </div>
            </Grid>
          </Box>
        </div>
      ) : (
        <Checkout setOrderId={setOrderId} vaciarCarrito={vaciarCarrito} />
      )}
    </div>
  );
};

export default Cart;
