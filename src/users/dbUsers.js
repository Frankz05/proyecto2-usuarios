let baseId = 1
const users = [
    {
        "id": baseId++,
        "firstName": "Frank",
        "lastName": "Zavaleta",
        "email": "frank@unacem.pe",
        "password": "12345",
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

module.exports = users