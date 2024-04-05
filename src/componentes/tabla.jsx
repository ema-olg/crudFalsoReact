import "./tabla.scss";
import series from "../APIs/series.json";
import { useEffect } from "react";
import DataBase from "./dataBase";

const ListadoPeliculas = () => {
  const { seriesDB, setSeriesDB } = DataBase();

  useEffect(() => {
    series.series.forEach((el) => {
      const serie = {
        nombre: el.nombre,
        añoEstreno: el.año_estreno,
        subgenero: el.subgenero,
        temporada: el.temporadas,
        pataforma: el.plataforma,
      };
      setSeriesDB((seriesDB) => [...seriesDB, serie]);
    });
  }, [setSeriesDB]);

  // const eliminar=(id)=>{
  // }
  // const editar=(id)=>{
  // }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Subjenero</th>
            <th>Plataforma</th>
            <th>Estreno</th>
            <th>Temporadas</th>
            {/* <th>Eliminar Editar</th> */}
          </tr>
        </thead>
        <tbody>
          {seriesDB.map((el, id) => (
            <tr key={id}>
              <td>{el.nombre ? el.nombre : "-----"}</td>
              <td>{el.subgenero ? el.subgenero : "-----"}</td>
              <td>{el.pataforma ? el.pataforma : "-----"}</td>
              <td>{el.añoEstreno ? el.añoEstreno : "-----"}</td>
              <td>{el.temporada ? el.temporada : "----"}</td>
              {/* <td>
                <button onClick={eliminar}>Eliminar</button>
                <button onClick={editar}>Editar</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListadoPeliculas;
