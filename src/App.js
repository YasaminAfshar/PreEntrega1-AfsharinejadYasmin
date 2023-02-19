//Importaciones de todos los componentes
import Navbar from "./Components/Navbar/Navbar.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"¡Hola, te doy la bienvenida a mi página!"} />
    </div>
  );
}

export default App;
