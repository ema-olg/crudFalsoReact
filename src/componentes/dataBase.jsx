import { useEffect, useState } from "react";

const DataBase = () => {    
  const [seriesDB, setSeriesDB] = useState([]);
  useEffect(() => {
    console.log(seriesDB)
  }, [seriesDB]);

  return{
    seriesDB,
    setSeriesDB
  }    
}
 
export default DataBase;