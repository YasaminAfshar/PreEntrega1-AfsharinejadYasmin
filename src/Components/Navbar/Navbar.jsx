
//Importar los subcomponentes que se aplica al Navbar
import CartWidget from "../CartWidget/CartWidget";

//Importar el arhivo de CSS
import style from "./Navbar.module.css";


const Navbar = () => {
    return (
      <div className={style.containerNavbar}>
        <img
          src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1676769670/MULTIMEDIA/logo_gloprt.png"
          alt="Logo de la tienda Mundo Lana!"
        />

        <ul className={style.containerList}>
          <li>
            <a href="#">Todos</a>
          </li>
          <li>
            <a href="#">Lanas</a>
          </li>
          <li>
            <a href="#">Kit Agujas</a>
          </li>
          <li>
            <a href="#">Accesorios</a>
          </li>
        </ul>

        <CartWidget />
      </div>
    );
};

export default Navbar;