import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);

    
    const agregarCarrito = (producto) => {
        let exist = estaEnCarrito (producto.id);

        if (exist) {
            let nuevoCart = cart.map ((elemento) => {
                if (elemento.id === producto.id) {
                    return {
                      ...elemento,
                      quantity: producto.quantity,
                    };
                } else {
                    return elemento;
                }
            });

            setCart(nuevoCart);
        } else {
            setCart ([...cart, producto]);
        }
    }


    const estaEnCarrito = (id) => {
        return cart.some ((elemento) => elemento.id === id);
    }

    const vaciarCarrito = () => {
        
        setCart([]);
    }

    const totalCantidadProductos = () => {
        return cart.reduce( (acc, elemento) => {
            return acc + elemento.quantity;
        }, 0);
        
    };

    const precioTotalCarrito = () => {
        const precioTotal = cart.reduce( (acc, elemento) => {
            return acc + (elemento.quantity * elemento.precio);
        }, 0);
        
        return precioTotal;
    };

    const descuento = () => {
        let precio = precioTotalCarrito();
        if (precio < 2500) {
            return "¡NO SE HA APLICADO EL DESCUENTO DEL 25%!"
        } else {
            return "¡SE HA APLICADO EL DESCUENTO DEL 25%!"
        }
    }

    const precioFinal = () => {
        let precio = precioTotalCarrito();
        let descuento = 0.25;
        if (precio < 2500){
            return precio;
        } else {
            let nuevoPrecio = precio - (precio * descuento);
            return nuevoPrecio;
        }
    }

    const eliminarProducto = (id) => {
        const nuevoCart = cart.filter( elemento => elemento.id !== id)
        setCart(nuevoCart)
    }

    const obtenerCantidad = (id) => {
        const productosSeleccionados = cart.find( (elemento) => elemento.id === id)
        return productosSeleccionados?.quantity;
    }


    let data = {
      cart,
      estaEnCarrito,
      agregarCarrito,
      vaciarCarrito,
      totalCantidadProductos,
      precioTotalCarrito,
      precioFinal,
      descuento,
      eliminarProducto,
      obtenerCantidad,
    };

    return <CartContext.Provider value={data}>
        {children}
        </CartContext.Provider>

}

export default CartContextProvider;