
//Importar Link de Router
import { Link } from "react-router-dom";

//Importa el archivo de CSS
import style from "./CartWidget.module.css";

//Importar libreria de iconos
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";


const CartWidget = () => {

  return (
    <Link to="/cart">
      <div className={style.cartContainer}>
        <AddShoppingCartOutlinedIcon sx={{ fontSize: 50, color: "black" }} />
        <span>0</span>
      </div>
    </Link>
  );

}

export default CartWidget;