# express_sql_sales

This is a simple express server to perform sql requests to a mysql server using both raw queries and sequelize.

## Features

- db folder includes a .sql file to be imported in your mysql server
- api folder includes the postman collection to test all routes
- includes 2 sets of routes, one for raw mysql queries and another one with sequelize implementation
- includes basic error logging functionality

## Installation

Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the server.

```sh
yarn installl
```

Start using nodemon on port 3000
```sh
yarn dev
```

Start w/o using nodemon on port 3000
```sh
yarn start
```
