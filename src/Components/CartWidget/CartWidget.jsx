
//Importa el archivo de CSS
import style from "./CartWidget.module.css";

//Importar libreria de iconos
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div className={style.cartContainer}>
      <FaShoppingCart color="black" size={50} />
      <span>0</span>
    </div>
  );
}

export default CartWidget;