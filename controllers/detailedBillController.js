import db from '../db.js';

export const getAllDetailedBills = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM Detalle_factura');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalles de la facturas' });
  }
};

export const getDetailedBillById = async (req, res) => {
  const { id_detalle } = req.params;
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM Detalle_factura WHERE id_detalle = (:id_detalle)',
      args: { id_detalle }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalles de la factura' });
  }
};

export const deleteDetailedBill = async (req, res) => {
  const { id_detalle } = req.params;
  try {
    const result = await db.execute({
      sql: 'DELETE FROM Detalle_factura WHERE id_detalle = (:id_detalle)',
      args: { id_detalle }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar deatlles de la factura' });
  }
};

export const updateDetailedBill = async (req, res) => {
  const { id_detalle, id_factura, id_producto, cantidad, precio_unitario } = req.body;
  try {
    const result = await db.execute({
      sql: 'UPDATE Detalle_factura SET id_factura=:id_factura, id_producto=:id_producto, cantidad=:cantidad, precio_unitario=:precio_unitario WHERE id_detalle=:id_detalle',
      args: { id_detalle, id_factura, id_producto, cantidad, precio_unitario }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el detalle de la factura' });
  }
};

export const createDetailedBill = async (req, res) => {
  const { id_factura, id_producto, cantidad, precio_unitario } = req.body;
  try {
    const result = await db.execute({
      sql: 'INSERT INTO Detalle_factura (id_factura, id_producto, cantidad, precio_unitario) VALUES (:id_factura, :id_producto, :cantidad, :precio_unitario) RETURNING *',
      args: { id_factura, id_producto, cantidad, precio_unitario }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear detalles de factura' });
  }
};

