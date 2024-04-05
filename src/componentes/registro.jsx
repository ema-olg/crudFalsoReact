import { useForm } from "react-hook-form";
import "./registro.scss";
import DataBase from "./dataBase";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { seriesDB, setSeriesDB } = DataBase();

  const onSubmit = (data) => {
    const serie = {
      nombre: data.nombre,
      añoEstreno: data.año_estreno,
      subgenero: data.subgenero,
      temporada: data.temporadas,
      pataforma: data.plataforma
    };
    setSeriesDB((seriesDB) => [...seriesDB, serie]);
    // console.log(seriesDB);
    // console.log(data)
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre </label>
          {errors.nombre?.type === "required" && (
            <p className="errors">Debes ingresar un nombre de serie</p>
          )}
          <input
            type="text"
            id="nombre"
            {...register("nombre", {
              required: true,
            })}
          />
        </div>
        <div>
          <label htmlFor="subgenero">Subgenero </label>
          <input type="text" id="subgenero" {...register("subgenero")} />
        </div>
        <div>
          <label htmlFor="plataforma">Plataforma </label>
          <input type="text" id="plataforma" {...register("plataforma")} />
        </div>
        <div>
          <label htmlFor="año_estreno">Estreno </label>
          {errors.año_estreno && (
            <p className="errors">Debes ingresar un año de 4 digitos</p>
          )}
          <input
            type="text"
            id="año_estreno"
            {...register("año_estreno", {
              pattern: /^(\d{4}|\d{6})$/g,
            })}
          />
        </div>
        <div>
          <label htmlFor="temporadas">Temporada </label>
          <input type="number" id="temporadas" {...register("temporadas")} />
        </div>
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Registro;
