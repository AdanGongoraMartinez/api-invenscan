import db from '../db.js';

export const getAllBills = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM Facturas');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener Facturas' });
  }
};

export const getBillById = async (req, res) => {
  const { id_factura } = req.params;
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM Facturas WHERE id_factura = (:id_factura )',
      args: { id_factura }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Factura' });
  }
};

export const deleteBill = async (req, res) => {
  const { id_factura } = req.params;
  try {
    const result = await db.execute({
      sql: 'DELETE FROM Facturas WHERE id_factura = (:id_factura)',
      args: { id_factura }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el Factura' });
  }
};

export const updateBill = async (req, res) => {
  const { id_factura, id_cliente, fecha_factura, total } = req.body;
  try {
    const result = await db.execute({
      sql: 'UPDATE Facturas SET id_cliente=:id_cliente, fecha_factura=:fecha_factura, total=:total WHERE id_factura=:id_factura',
      args: { id_factura, id_cliente, fecha_factura, total }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el Factura' });
  }
};


export const createBill = async (req, res) => {
  const { id_factura, id_cliente, fecha_factura, total } = req.body;
  try {
    const result = await db.execute({
      sql: 'INSERT INTO libros (id_factura, id_cliente, fecha_factura, total) VALUES (:id_factura, :id_cliente, :fecha_factura, :total) RETURNING *',
      args: { id_factura, id_cliente, fecha_factura, total }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Factura' });
  }
};

