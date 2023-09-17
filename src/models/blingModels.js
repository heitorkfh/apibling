const connection = require('./connection')

const getAll = async () => {
  const cbEstoque = await connection.execute('SELECT * FROM labeille.callback_estoque')
  return cbEstoque[0]
}
const inserirCallback = async(reg) => {
  const { id, codigo, nome, estoqueAtual } = reg.retorno.estoques[0].estoque
  const dateUTC = new Date(Date.now())
  const query = 'INSERT INTO labeille.callback_estoque(id,sku,nome,estoque_atual,data_hora,importado) VALUES (?, ?, ?, ?, ?, ?)'
  const [inserirCB] = await connection.execute(query, [id, codigo, nome, estoqueAtual, dateUTC, 'N'])
  return inserirCB
}
//
//const inserirCallback = async(reg) => {
//  console.log(reg)
//  const { id, sku, nome, estoque_atual } = reg
//  const dateUTC = new Date(Date.now())
//  const query = 'INSERT INTO callback_estoque(id,sku,nome,estoque_atual,data_hora,importado) VALUES (?, ?, ?, ?, ?, ?)'
//  const [inserirCB] = await connection.execute(query, [id, sku, nome, estoque_atual, dateUTC, 'N'])
//  return inserirCB
//}
module.exports = {
  getAll,
  inserirCallback
}