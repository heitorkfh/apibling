const blingModel = require('../models/blingModels')

const getAll = async (req, res) => {
  const cbEst = await blingModel.getAll()

  return res.status(200).json(cbEst)
}

const inserirCallback = async (req, res) => {
  //console.log(res)
  const insCB = await blingModel.inserirCallback(req.body)
  
  return res.status(201).json(insCB)
}
module.exports = {
  getAll,
  inserirCallback
}