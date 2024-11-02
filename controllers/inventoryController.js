import db from '../db.js';

export const getAllItems = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM Inventario');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener Objetos del Inventario' });
  }
};

export const getItemById = async (req, res) => {
  const { id_inventario } = req.params;
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM Inventario WHERE id_inventario = (:id_inventario)',
      args: { id_inventario }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Objeto del Inventario' });
  }
};

export const deleteItem = async (req, res) => {
  const { id_inventario } = req.params;
  try {
    const result = await db.execute({
      sql: 'DELETE FROM Productos WHERE id_inventario = (:id_inventario)',
      args: { id_inventario }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el Objeto del Inventario' });
  }
};

export const updateItem = async (req, res) => {
  const { id_producto, cantidad_en_stock } = req.body;
  try {
    const result = await db.execute({
      sql: 'UPDATE Productos SET id_producto=:id_producto, cantidad_en_stock=:cantidad_en_stock',
      args: { id_producto, cantidad_en_stock }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el Objeto del Inventario' });
  }
};


export const createItem = async (req, res) => {
  const { id_producto, cantidad_en_stock } = req.body;
  try {
    const result = await db.execute({
      sql: 'INSERT INTO libros ( id_producto, cantidad_en_stock ) VALUES (:id_producto, :cantidad_en_stock ) RETURNING *',
      args: { id_producto, cantidad_en_stock }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Objeto del Inventario' });
  }
};

