
//Importar archivos compartidos
import {useContext} from "react"
import { CartContext } from "../../Context/CartContext";

//Importar Link de Router
import { Link } from "react-router-dom";

//Importa el archivo de CSS
import style from "./CartWidget.module.css";

//Importar libreria de iconos
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";


const CartWidget = () => {

  const {totalCantidadProductos} = useContext(CartContext)

  const total = totalCantidadProductos()

  return (
    <Link to="/cart">
      <div className={style.cartContainer}>
        <AddShoppingCartOutlinedIcon sx={{ fontSize: 40, color: "black" }} />
        <span>{total}</span>
      </div>
    </Link>
  );

}

export default CartWidget;