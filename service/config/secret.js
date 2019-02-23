const uuid = require('uuid/v4')
const os = require('os')
const bcrypt = require('bcrypt')
const fs = require('fs')

let tokenKey = process.argv[2]
key = tokenKey.split("=")
generated = `${uuid()}-${key[1]}-${os.hostname()}`
bcrypt.hash(generated, 12, (err, hash) => {
    if(err) throw err
    json = JSON.stringify({'key': hash})
    fs.writeFile('./.key', json, err => {
        if (err) {
            new Error("Sorry Generated Has Failed")
        }
    })

})




