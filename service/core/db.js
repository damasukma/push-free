'use strict'

const r = require('rethinkdb')

class Database{
  constructor(){}

    createDatabase(conn, dbName){
        return r.dbList().run(conn).then(list => {
            var dbFound = false;
            for(let i = 0; i < list.length; i++){
                if(list[i] == dbName){
                    dbFound = true
                    break
                }
            }
                if(!dbFound)
                {
                    console.log(`Creating Database ${dbName}`)
                    return r.dbCreate(dbName).run(conn)
                }
                else
                {
                    console.log('Database Exist...')
                    return Promise.resolve({dbs_exists: true})
                }
            
        })
    }

    

    createTable(conn, tableName){
        return r.tableList().run(conn).then((list) => {
            var tableFound = false;
            for (var i=0; i<list.length; i++) {
                if (list[i] == tableName) {
                    tableFound = true;
                    break;
                }
            }
            if (! tableFound) {
                console.log(`Creating Table ${tableName}...`);
                return r.tableCreate(tableName).run(conn);
            }
            else {
                console.log('Table exists.');
                return Promise.resolve({table_exists:true});
            }
        });
        
    }
}

module.exports = Database