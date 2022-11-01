# Test project

The test project for discovering the possibility for creating an app with multiple entry points.

The app should have two options

1. launch each service separatelly as microservice
2. launch microservices together as monolith

## How to use

1. close repo
2. `npm install`
3. `cd appA; npm install`
4. `cd appB; npm install`

To launch as monolith run `npm start`. The app will run on localhost:3000

To launch separatelly

1. AppA - `cd appA; npm start` The app will run on localhost:3001
2. AppB - `cd appB; npm start` The app will run on localhost:3002

## API

### AppA

GET /app-a/name - returns "My name is 'App A'"
GET /app-a/age-by-name/:name - returns calculated age from name. Used service api.agify.io

### AppB

GET /app-b/name - returns "My name is 'App B'"
GET /app-b/random-word - returns random word and explanation of it. Used service random-words-api.vercel.app
