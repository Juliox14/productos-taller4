import connection from "../../db/configDB.ts";

export const getAll = (req: any, res: any): void => {
  
  connection.connect(async(err) => {
    if(err){
      console.log("Hubo un fallo al crear la conexión a la base de datos");
      return;
    }
    
    const data = (await connection.promise().query("SELECT * FROM productos"))[0];
    res.status(200).json({
      mensaje: "LISTA DE PRODUCTOS",
      data
    })
  })
  connection.end();
};