import db from '../db.js';

export const getAllProducts = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM Productos');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener Productos' });
  }
};

export const getProductById = async (req, res) => {
  const { id_producto } = req.params;
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM Productos WHERE id_producto = (:id_producto)',
      args: { id_producto }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Producto' });
  }
};

export const deleteProduct = async (req, res) => {
  const { id_producto } = req.params;
  try {
    const result = await db.execute({
      sql: 'DELETE FROM Productos WHERE id_producto = (:id_producto )',
      args: { id_producto }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el Producto' });
  }
};

export const updateProduct = async (req, res) => {
  const { id_producto, nombre, descripcion, precio, categoria, fecha_agregado } = req.body;
  try {
    const result = await db.execute({
      sql: 'UPDATE Productos SET id_producto=:id_producto, nombre=:nombre, descripcion=:descripcion, precio=:precio, categoria=:categoria, fecha_agregado=:fecha_agregado',
      args: { id_producto, nombre, descripcion, precio, categoria, fecha_agregado }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Producto' });
  }
};


export const createProduct = async (req, res) => {
  const { id_producto, nombre, descripcion, precio, categoria, fecha_agregado } = req.body;
  try {
    const result = await db.execute({
      sql: 'INSERT INTO libros ( id_producto, nombre, descripcion, precio, categoria, fecha_agregado) VALUES (:id_producto, :nombre, :descripcion, :precio, :categoria, :fecha_agregado) RETURNING *',
      args: { id_producto, nombre, descripcion, precio, categoria, fecha_agregado }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Producto' });
  }
};

