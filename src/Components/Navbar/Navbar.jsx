
//Importar los subcomponentes que se aplica al Navbar
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

//Importar el arhivo de CSS
import style from "./Navbar.module.css";


const Navbar = ( { children } ) => {

  return (
    <div className={style.containerNavbar}>
      
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1676769670/MULTIMEDIA/logo_gloprt.png"
          alt="Logo de la tienda Mundo Lana!"
        />
      </Link>

      <ul className={style.containerList}>
        <Link to="/" className={style.listFilter}>
          Todos
        </Link>
        <Link to="/category/lanas" className={style.listFilter}>
          Lanas
        </Link>
        <Link to="/category/kit" className={style.listFilter}>
          Kit 
        </Link>
        <Link to="/category/accesorios" className={style.listFilter}>
          Accesorios
        </Link>
      </ul>

      <CartWidget/>

      {children}

    </div> 
  );
};

export default Navbar;