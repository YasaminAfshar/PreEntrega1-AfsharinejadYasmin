
//Importar archivos complementarios

import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"

//Importar archivo de libreria
import PacmanLoader from "react-spinners/PacmanLoader";



const ItemListContainer = () => {

  const { categoryId } = useParams();

  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {

      const itemCollection = collection(db, "productos");

      let respuesta = undefined;

      if (categoryId) {
        const q = query(itemCollection, where("category", "==", categoryId));
        respuesta = getDocs(q);
        
      } else {
        respuesta = getDocs(itemCollection);
      }

      respuesta
      .then((respuesta) => {
          let products = respuesta.docs.map((elemento) => {
            return {
              ...elemento.data(),
              id: elemento.id,
            };
          });

          setCatalogo(products);
        });

  }, [categoryId]);

  if (catalogo.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px",
          height: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: "3em",
            fontFamily: "'Righteous', cursive",
            letterSpacing: "4px",
            textAlign: "center",
            color: "#b71c1c",
            textShadow: "3px 2px 4px #f03939",
          }}
        >
          Cargando catalogo.....
          <div style={{ marginTop: "30px" }}>
            <PacmanLoader
              color="#f03939"
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: " #cb6452cf"
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