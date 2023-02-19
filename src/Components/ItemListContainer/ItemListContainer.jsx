
//Importa el archivo de CSS
import styles from "./ItemListContainer.module.css";


const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.itemContainer}>
      <h1>{greeting}</h1>
      <img
        src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1676792818/MULTIMEDIA/f4b4dc0aea2bf35503df00a96b9ad4dc_pqcuam.jpg"
        alt="Ícono de carita feliz o sonriente"
      />
    </div>
  );
};

export default ItemListContainer;