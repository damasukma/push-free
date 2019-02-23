
const r = require('rethinkdb')

const Database = require('./../service/core/db')
const config = require('./config/config')

const db = new Database()


    r.connect(config.rethinkdb, (err, conn) => {
        if(err)
        {
            console.log(`Could not open a connection to initialize the database: ${err.message}`)
        }
        else
        {
            console.log('Connected...')
            db.createDatabase(conn, config.rethinkdb.db).then(() => {
                return Promise.all([db.createTable(conn, 'author'), db.createTable(conn, 'notif'), db.createTable(conn, 'config_configure')])
            }).catch((err) => {
                console.log(`Error creating database and/or table: ${err}`);
            })


        }
        
    })



    