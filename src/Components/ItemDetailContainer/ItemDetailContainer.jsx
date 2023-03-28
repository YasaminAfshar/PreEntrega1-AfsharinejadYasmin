
//Importar archivos complementarios
import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore"

import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

  const { id } = useParams();

  const { agregarCarrito, obtenerCantidad } = useContext(CartContext);

  const [productoSeleccionado, setProductoSeleccionado] = useState({})

  useEffect (() => {

    const itemCollection = collection(db, "productos");
    const referencia = doc(itemCollection, id);
    getDoc(referencia)
      .then( (respuesta) => {
        setProductoSeleccionado({
          ...respuesta.data(),
          id: respuesta.id
        })
      })

  }, [id])

  const onAdd = (cantidad) => {
    let producto = {
      ...productoSeleccionado,
      quantity: cantidad,
    };

    agregarCarrito(producto);

    Swal.fire("¡Se ha agregado el producto al carrito con éxito!", "", "success");

  };

  let cantidadProductos = obtenerCantidad(Number(id));

  return (
    <ItemDetail
      productoSeleccionado={productoSeleccionado}
      cantidadProductos={cantidadProductos}
      onAdd={onAdd}
    />
  );
}

export default ItemDetailContainer;