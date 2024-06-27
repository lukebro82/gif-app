import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategory }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {" "}
      <div className="div-titulo">
        {" "}
        <h3>{category}</h3>
        <button className="button-x" onClick={() => onDeleteCategory(category)}>
          X
        </button>
      </div>
      {isLoading ? <h2>Cargando...</h2> : null}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} /> // {...image} se usa para mandar todas las props cuando son muchas
        ))}
      </div>
    </>
  );
};
