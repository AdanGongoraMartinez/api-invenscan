import db from '../db.js';

export const getAllUsers = async (req, res) => {
  try {
    const result = await db.execute('SELECT * FROM Usuarios');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener Usuarios' });
  }
};

export const getUserById = async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM Usuarios WHERE id_usuario  = (:id_usuario )',
      args: { id_usuario }
    });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

