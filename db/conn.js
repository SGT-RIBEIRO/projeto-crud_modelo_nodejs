const  Sequelize  = require("sequelize")
const dadosBanco = require('../dadosBanco/dadosBanco')

const sequelize = new Sequelize(
    dadosBanco.nomeBanco,
    'root',
    dadosBanco.senhaBanco,
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)

try {
    sequelize.authenticate()
    console.log('Conectamos ao MySql!')
} catch (error) {
    console.log(`Não foi possível conectar pelo seguinte motivo: ${error}`)
}

module.exports = {
    Sequelize: sequelize,
    sequelize: sequelize
}