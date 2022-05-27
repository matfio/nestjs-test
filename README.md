# nestjs-test

## Description

This project contains both a REST API and a GraphQL API. It uses NestJS and it is completely written in TypeScript.
It is divided in two parts:
- Users
- Products

While Products uses a REST API to query, insert, delete and update said products, Users are implemented using GraphQL

## Usage

### Install

To use this project you will need to clone this repository

`git clone git@github.com:matfio/nestjs-test.git`

then you can install the dependencies needed

`npm install`

this project uses mongoDB, see below on how to connect with your own database.
You can run the project with the following command

`npm run start`

### MongoDB

This project uses the Atlas version of MongoDB, which is a cloud based database. You can find more about it here: [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
In order to run this application you will need to create a free account and add a .env file in the project local folder containing the following:

```
USER_NAME="yourUsername" 
USER_PASSWORD="yourPassword"
```

This will allow mongoose to connect to your Atlas MongoDB account, create and update tables

### REST API

It is possible to manipulate the products through REST API with the following requests:

`GET http://localhost:3000/products/`

`GET http://localhost:3000/products/:id`

`POST http://localhost:3000/products/`

`PATCH http://localhost:3000/products/:id`

`DELETE http://localhost:3000/products/:id`


### GraphQL

It is possible to manipulate the users through GraphQL. This is easily done by accessing the GraphQL playground

`http://localhost:3000/graphql/`

There you will be able to query, add and remove users. You can also add multiple products to the same user through product ids.

Example query:
```
{
  users
  {
    _id
    name
    membership
    membershipExpiration
    creation
    products{
      id
      title
    }
  }
}
```

Example creation (You will need to create the products separately with the REST API in order to add them here. The products field is nullable and not required when creating a user):
```
mutation {
  createUser(input: {
    name: "Josh",
    middleName: "rich guy"
    surname: "Wallace"
    products: [
      "626be096b4da0780d2b90854",
      "6290d1c8b7f233b9d601a16c"
    ]
    
  }) {
    _id
  }
}
```

Example deletion:
```
mutation {
  deleteUserById(id: "6290b672e0b3ebb339d1ad4a"){
    _id
  } 
}
```