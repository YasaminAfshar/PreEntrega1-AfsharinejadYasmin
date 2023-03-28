
//Importar archivos complementarios
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

//Importar libreria de íconos
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

//Importar link del router
import {Link} from "react-router-dom"


const ItemDetail = ({ element }) => {

  return (
    <Card
      sx={{
        maxWidth: 320,
        margin: "20px",
        height: 680,
        backgroundColor: "black",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        borderRadius: "8%",
        border: "none",
        overflow: "hidden",
        padding: "10px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={element.imagen}
          alt={element.descripcion}
          sx={{
            height: "420px",
            borderRadius: "8%",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: "'Dosis', sans-serif",
              color: "white",
              textAlign: "center",
              fontSize: "1.9em",
              padding: "10px 0 ",
            }}
          >
            {element.nombre}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontSize: "1.7em",
              padding: "10px 0 5px 0",
              textAlign: "center",
              fontWeight: "700",
              letterSpacing: "4px",
            }}
          >
            $ {element.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex", justifyContent:"center"}}>
        <Link
          to={`/item/${element.id}`}
          style={{
            textDecoration: "none"
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1.2em",
              fontWeight: "700",
              backgroundColor: "#ab47bc",
              marginBottom: "10px"
            }}
          >
            Ver detalle <AddCircleOutlineIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemDetail