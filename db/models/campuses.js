var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campuses',
  {
    name: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    }
  }, {

  }
)

