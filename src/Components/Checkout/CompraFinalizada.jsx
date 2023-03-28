import React from 'react'
import DoneAllIcon from "@mui/icons-material/DoneAll";
import UndoIcon from "@mui/icons-material/Undo";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const CompraFinalizada = ({order}) => {

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "160px auto",
      }}
    >
      <div
        style={{
          width: "80%",
          backgroundColor: "#ccff90",
          textAlign: "center",
          padding: "40px 10px",
        }}
      >
        <h2
          style={{
            fontSize: "2.6em",
            fontFamily: "'Fjalla One', sans-serif",
            paddingBottom: "20px",
          }}
        >
          <DoneAllIcon sx={{ fontSize: "50px", color: "#1b5e20" }} />
          ¡Se ha realizado la compra con éxito!
        </h2>
        <h3 style={{ fontFamily: "'Karla', sans-serif", fontSize: "2.2em" }}>
          El número de orden correspondiente a la compra realizada es:{" "}
          <strong>{order}</strong>
        </h3>
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
              margin: "20px auto 0 auto ",
            }}
          >
            Seguir comprando
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CompraFinalizada;