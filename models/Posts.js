const { Sequelize, sequelize } = require('./db')

const tableName = 'posts'

const Post = sequelize.define(tableName, {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
})

async function tableExists(tableName) {
    const tableNames = await sequelize.getQueryInterface().showAllTables()

    return tableNames.includes(tableName)
}

tableExists(tableName)
    .then(exists => {
        if (exists) {
            console.log(`${tableName} exists!`)
            return    
        } else {
            Post.sync({ force: true })
            console.log(`${tableName} created!`)
        }
    }).catch(err => console.log(err))

module.exports = Post