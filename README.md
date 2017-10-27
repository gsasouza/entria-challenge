# entria-chalenge
[![Build Status](https://travis-ci.org/gsasouza/entria-challenge.svg?branch=master)](https://travis-ci.org/gsasouza/entria-challenge)
[![codecov](https://codecov.io/gh/gsasouza/entria-challenge/branch/master/graph/badge.svg)](https://codecov.io/gh/gsasouza/entria-challenge)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Hello guys, this is my solution for the backend [challenge](https://github.com/entria/jobs/blob/master/backend/challenge.md) 

### Tasks
- [x] Create a simple model on mongoose
- [x] Create a REST CRUD (create, read, update, delete) for the model created using koajs
- [x] it should be open sourced on your github repo

#### Extras
- [x] Add tests using Jest
- [x] Add authentication
- [ ] Add docker support
- [ ] Create a GraphQL Type for the model created, and expose it in a GraphQL endpoint

## Install Instructions

- clone this repository ```git clone https://github.com/gsasouza/entria-challenge```
- install the npm modules ```npm install```
- run ```npm start``` (for tests purposes I included an .env file wich has all config variables)

## Data Types
#### User
- name - String - required
- username - String - required
- password - String - required
- email - String - required

## Routes
### User Crud (require a Authorization header with a bearer token)
- CREATE - POST -> /api/users
- READ ALL - GET -> /api/users
- READ ONE - GET -> /api/users/:_id
- UPDATE - PUT -> /api/users/:_id
- REMOVE - DELETE -> /api/users/:_id

### Authentication
- LOGIN -> POST /api/auth/login * username and password required
- REGISTER -> POST /api/auth/register * require all user's fields

 
