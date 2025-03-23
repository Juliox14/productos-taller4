import connection from "../../db/configDB.ts";

export const getAll = (req: any, res: any): void => {

  connection.connect(async (err) => {
    if (err) {
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


export const insertProductos = async (req: any, res: any): Promise<void> => {
  try {

    const productos = req.body;
    const db = connection.promise();

    for (const producto of productos) {
      await db.query(
        "INSERT INTO productos (nombre, categoria, detalles, precio) VALUES (?, ?, ?, ?)",
        [producto.nombre, producto.categoria, producto.detalles, producto.precio]
      );
    }
    res.status(200).json({
      mensaje: "Inserción exitosa en la base de datos"
    })
  }
  catch (err: any) {
    console.error(err, "Hubo un error al insertar datos en la BD")
  }
};


export const putProductos = async (req: any, res: any): Promise<void> => {
  try {
    const { id } = req.query;
    console.log(id);
    const { nombre, categoria, detalles, precio } = req.body;
    const db = connection.promise();

    const [result]: any = await db.query(
      "UPDATE productos SET nombre = ?, categoria = ?, detalles = ?, precio = ? WHERE id = ?",
      [nombre, categoria, detalles, precio, id]
    );

    if (result.affectedRows > 0) {
      return res.status(200).json({
        mensaje: "Actualización exitosa en la base de datos"
      })
    } else {
      res.status(404).json({ mensaje: "Producto no encontrado" });
    }
  }
  catch (err: any) {
    console.error("Error al actualizar registros");
  }
}


export const deleteProducto = async (req: any, res: any): Promise<void> => {
  try {
    const { id } = req.query;
    const db = connection.promise();

    const [result]: any = await db.query(
      "DELETE FROM productos WHERE id = ?",
      [id]
    );

    if (result.affectedRows > 0) {
      return res.status(200).json({
        mensaje: "Eliminación exitosa en la base de datos"
      })
    } else {
      res.status(404).json({ mensaje: "Producto no encontrado" });
    }
  }
  catch (err: any) {
    console.error("Error al actualizar registros");
  }
}