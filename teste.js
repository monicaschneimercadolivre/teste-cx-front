

const data=[
    {
        "_id": "63b4199020ec8d39dfdf6257",
        "author": {
            "name": "Autho1",
            "lastName": "LastName1",
            "locale": "Locale1"
        },
        "categories": [
            "Eletrônicos"
        ],
        "items": {
            "title": "Celular",
            "price": {
                "currency": "R$",
                "amount": 2000,
                "decimals": 50
            },
            "picture": "APicture",
            "condition": "ótima",
            "free_shipping": true,
            "stock": 10,
            "description": "Celular Samsung",
            "_id": "63b4199020ec8d39dfdf6258"
        },
        "createdAt": "2023-01-03T12:03:28.363Z",
        "updatedAt": "2023-01-04T11:05:09.043Z",
        "__v": 0
    },
    {
        "_id": "63b4199020ec8d39dfdf6257",
        "author": {
            "name": "Autho1",
            "lastName": "LastName1",
            "locale": "Locale1"
        },
        "categories": [
            "Eletrônicos"
        ],
        "items": {
            "title": "Celular",
            "price": {
                "currency": "R$",
                "amount": 2000,
                "decimals": 50
            },
            "picture": "APicture",
            "condition": "ótima",
            "free_shipping": true,
            "stock": 10,
            "description": "Celular Samsung",
            "_id": "63b4199020ec8d39dfdf6258"
        },
        "createdAt": "2023-01-03T12:03:28.363Z",
        "updatedAt": "2023-01-04T11:05:09.043Z",
        "__v": 0
    },
    {
        "_id": "63b4199020ec8d39dfdf6257",
        "author": {
            "name": "Autho1",
            "lastName": "LastName1",
            "locale": "Locale1"
        },
        "categories": [
            "Eletrônicos"
        ],
        "items": {
            "title": "NãoéCelular",
            "price": {
                "currency": "R$",
                "amount": 2000,
                "decimals": 50
            },
            "picture": "APicture",
            "condition": "ótima",
            "free_shipping": true,
            "stock": 10,
            "description": "Celular Samsung",
            "_id": "63b4199020ec8d39dfdf6258"
        },
        "createdAt": "2023-01-03T12:03:28.363Z",
        "updatedAt": "2023-01-04T11:05:09.043Z",
        "__v": 0
    }
]

const findTitle = (search, title)=>{
  return  search.map((data)=> data).find((data)=>data.items.title === title)
}

//console.log(findTitle(data, 'Celular'))

const getPrice = ()=>{
    return data.map((d)=>d.items)
}

console.log(getPrice())