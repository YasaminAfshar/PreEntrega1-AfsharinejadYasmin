
//Importar archivos complementarios
import ItemDetail from "./ItemDetail"


const ItemList = ( {catalogo} ) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      {catalogo.map((element) => {
        return <ItemDetail key={element.id} element={element} />;
      })}
    </div>
  );
}

export default ItemList