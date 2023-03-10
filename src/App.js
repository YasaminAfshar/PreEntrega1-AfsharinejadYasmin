//Importaciones de todos los componentes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import Cart from "./Components/Cart/Cart"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        <Route path="*" element={<h1> error 404: Not found </h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
