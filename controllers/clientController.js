import db from '../db.js';

export const getAllClients = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM Clientes');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener Clientes' });
  }
};

export const getClientById = async (req, res) => {
  const { id_cliente } = req.params;
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM Clientes WHERE id_cliente = (:id_cliente )',
      args: { id_cliente }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el Cliente' });
  }
};

export const deleteClient = async (req, res) => {
  const { id_cliente } = req.params;
  try {
    const result = await db.execute({
      sql: 'DELETE FROM Clientes WHERE id_cliente = (:id_cliente)',
      args: { id_cliente }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al borrar el Cliente' });
  }
};

export const updateClient = async (req, res) => {
  const { id_cliente, nombre, direccion, telefono, email, fecha_registro } = req.body;
  try {
    const result = await db.execute({
      sql: 'UPDATE Clientes SET nombre=:nombre, direccion=:direccion, telefono=:telefono, email=:email, fecha_registro=:fecha_registro WHERE id_cliente=:id_cliente',
      args: { id_cliente, nombre, direccion, telefono, email, fecha_registro }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el Cliente' });
  }
};


export const createClient = async (req, res) => {
  const { nombre, direccion, telefono, email, fecha_registro } = req.body;
  try {
    const result = await db.execute({
      sql: 'INSERT INTO Clientes ( nombre, direccion, telefono, email, fecha_registro ) VALUES (:nombre, :direccion, :telefono, :email, :fecha_registro) RETURNING *',
      args: { nombre, direccion, telefono, email, fecha_registro }
    });
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Cliente' });
  }
};

