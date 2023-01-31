const express = require('express')

const app = express()

app.use(express.json())

//* DB USERS
let baseId = 1
const usersDB = [
    {
        "id": baseId++,
        "firstName": "Sahid",
        "lastName": "Kick",
        "email": "sahid.kick@academlo.com",
        "password": "root",
        "age": 29
    } ,
    {
        "id": baseId++,
        "firstName": "Panchito",
        "lastName": "Alimaña",
        "email": "panchito@unacem.pe",
        "password": "12345",
        "age": 39
    },
    {
        "id": baseId++,
        "firstName": "Luchito",
        "lastName": "Pisadito",
        "email": "luchito@unacem.pe",
        "password": "12345",
        "age": 49
    }
]
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ok!'
    })
})

//* Crud users

app.get('/users', (req, res) => {
    res.status(200).json(usersDB)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    const data = usersDB.find((item) => id === item.id)

    if(data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({
            message: 'Not Found',
        })
    }
})

app.post('/users', (req, res) => {
    const userObj = req.body
    
    const newUser = {
        id: baseId++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age
    }
    usersDB.push( newUser )

    if(newUser) {
        res.status(201).json(newUser)
    } else {
        res.status(406).json({
            message: 'Not Acceptable',
        })
    }
    

})


app.listen(9000, () => {
    console.log('Server is started in port 9000');
})



module.exports = app
