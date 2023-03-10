
//Importar archivos complementarios

import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../productsMock";

const ItemListContainer = () => {

  const { categoryId } = useParams();

  const [catalogo, setCatalogo] = useState([]);

  const productosFiltrados = productos.filter(
    (elemento) => elemento.category === categoryId
  );

  useEffect(() => {
    const listaProductos = new Promise((resolve, reject) => {
      resolve(categoryId ? productosFiltrados : productos);
    });

    listaProductos
      .then((res) => {
        setCatalogo(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <div
      style={{
        backgroundColor: " #cb6452cf",
      }}
    >
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
      <ItemList catalogo={catalogo} />
    </div>
  );
};

export default ItemListContainer;