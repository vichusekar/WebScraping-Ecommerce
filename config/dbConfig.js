const mongodb = require('mongodb')

const db_name = process.env.DB_NAME
const dburl = `${process.env.DB_URL}/${db_name}`

module.exports = {mongodb, db_name, dburl}