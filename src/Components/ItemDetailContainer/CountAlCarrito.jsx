
//Importar archivos complementarios
import React from 'react'
import { Button, ButtonGroup } from "@mui/material";

//Importar libreria de íconos
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import { useState } from "react";

//Importa el archivo de CSS
import style from "./CountAlCarrito.module.css"

const CountAlCarrito = ({ stock, initial = 1, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
    };

    const restar = () => {
      if (contador > 1) {
        setContador(contador - 1);
      }
    };

    const buttons = [
      <Button onClick={restar} key="three">
        <RemoveCircleOutlineIcon/> Restar
      </Button>,
      <Button key="two">{contador}</Button>,
      <Button onClick={sumar} key="one">
        <AddCircleOutlineIcon/> Sumar
      </Button>,
    ];

  return (
    <div className={style.containerCount}>
      <div className={style.containerButtons}>
        <ButtonGroup
          size="large"
          color="secondary"
          variant="contained"
          aria-label="button group"
        >
          {buttons}
        </ButtonGroup>
      </div>
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito <AddCircleOutlineIcon/>
      </Button>
    </div>
  );
}

export default CountAlCarrito