
import React from 'react'
import {addDoc, collection,updateDoc, doc} from "firebase/firestore"
import {db} from "../../firebaseConfig"
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//Importar iconos de libreria
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

//Importa el archivo de CSS
import style from "./Checkout.module.css";


const Checkout = ({ setOrderId, vaciarCarrito }) => {
  const { cart, precioFinal } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    telephone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = {
      buyer: formData,
      productos: cart,
      total: precioFinal(),
    };

    let orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((respuesta) => {
        setOrderId(respuesta.id)
        vaciarCarrito()
      })
      .catch((error) => console.log(error));

      cart.map((item) => {
        let docOrder = doc(db, "productos", item.id)
        updateDoc(docOrder,{stock: item.stock - item.quantity});
        return item
      })
  };


  return (
    <div style={{ height: "auto", width: "100%" }}>
      <h1 className={style.titleFormulario}>Formulario de compra</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className={style.titleDetalle}>Detalle de los productos</h3>

        {cart.map((producto) => {
          return (
            <div key={producto.id} className={style.listProductos}>
              <div>
                <img src={producto.imagen} alt={producto.descripcion} />
              </div>
              <div className={style.listProductosSecond}>
                <h6>Producto: {producto.nombre}</h6>
                <h6>
                  {" "}
                  Precio por cantidad: {producto.quantity} X ${" "}
                  {producto.precio * producto.quantity}
                </h6>
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.totalPagar}>
        <h2>
          Checkout{" "}
          <PriceCheckIcon sx={{ fontSize: "50px", margin: "0 20px" }} />
        </h2>
        <div>
          <h5>Precio total a pagar: $ {precioFinal()}</h5>
        </div>
      </div>

      <div className={style.formCompra}>
        <h5>Rellene el formulario para finalizar la compra</h5>
        <form
          autoComplete="off"
          className={style.listForm}
          onSubmit={handleSubmit}
        >
          <div className={style.textField1}>
            <div className={style.input}>
              <label>Nombre </label>
              <TextField
                required
                id="filled-required"
                label="Obligatorio"
                type="text"
                variant="filled"
                margin="dense"
                color="secondary"
                sx={{ width: "340px" }}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className={style.input}>
              <label>Apellido </label>
              <TextField
                required
                id="filled-required"
                label="Obligatorio"
                type="text"
                variant="filled"
                margin="dense"
                color="secondary"
                sx={{ width: "340px" }}
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
            </div>
          </div>
          <div className={style.input}>
            <label>Email</label>
            <TextField
              required
              id="filled-required"
              type="email"
              label="Obligatorio"
              variant="filled"
              margin="dense"
              color="secondary"
              sx={{ width: "85%" }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className={style.input}>
            <label>Repita el Email</label>
            <TextField
              required
              id="filled-required"
              type="email"
              label="Obligatorio"
              variant="filled"
              margin="dense"
              color="secondary"
              sx={{ width: "85%" }}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className={style.input}>
            <label>Teléfono</label>
            <TextField
              required
              type="number"
              id="filled-required"
              label="Obligatorio"
              variant="filled"
              margin="dense"
              color="secondary"
              sx={{ width: "60%" }}
              value={formData.telephone}
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              margin: "30px 30px 0 0",
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              id="submit"
              sx={{
                fontSize: "1.15em",
                fontFamily: " 'Yanone Kaffeesatz', sans-serif",
                boxShadow: "10px 10px 19px -3px rgba(0,0,0,0.65)",
              }}
            >
              Finalizar la compra
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;