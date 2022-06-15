const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('cars')
  .where({ id })
  .first()
}

const create = async car => {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(car)
  return getById(id)
}

const deleteById = async id => {
  const choppingBlockCar = await getById(id)
  await db('cars')
    .where({ id })
    .delete()
  return choppingBlockCar
}

const updateById = async (id, updatedCar) => {
  await db('cars')
    .where({ id })
    .update(updatedCar)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
}