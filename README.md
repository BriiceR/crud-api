![badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


# Node.js and MongoDB CRUD API

This is a Node.js and MongoDB CRUD (Create, Read, Update, Delete) API. It allows you to create, read, update, and delete items in a MongoDB database.

## Installation:

Clone this repository: git clone https://github.com/BriiceR/crud-api.git  
Install dependencies: npm install  

## Configuration:

Create a MongoDB database  
Create a .env file at the root of the project  
Add the following environment variables:  

```makefile
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
PORT=8000
```
Make sure the username, password, cluster name, and database name correspond to those you defined when creating your MongoDB database.


## Usage:

Start the server: npm start  
Send requests to the API using a tool like Postman  

## Endpoints:

GET /localhost:8000/todos : Retrieve all items  
GET /localhost:8000/todos/:id : Retrieve an item by ID  
POST /localhost:8000/todos : Create a new item  
PUT /localhost:8000/todos/:id : Update an item by ID  
DELETE /localhost:8000/todos/:id : Delete an item by ID  

## Contribution:

Contributions are welcome! If you want to contribute to this project, please create an issue or a pull request.

## License

This project is licensed under the MIT license. See the LICENSE file for more details.
