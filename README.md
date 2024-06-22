# Pokemon Battle - Backend

## Dependencies:

NodeJS v22.2.0 or later

## Notes:

- Authentication not required

- Dotenv file required

## Installation:

- Download this repository on your computer

- Add the .env file in the main folder. Request the file from the author.

- Open in your IDE

- In your terminal, download node dependencies with command npm i

- Run the API with command npm start

## Endpoints:

#### Create Pokemon

- POST method

- localhost:4000/api/pokemon

- Authentication not required

- Body must be:
  {}

- Recieve:
  {success: true, error: null, response: ""}

#### Update Pokemon

- PUT method

- localhost:4000/api/pokemon

- Authentication not required

- Body must be:
  {}

- Recieve:
  {success: true, error: null, response: ""}

#### Delete Pokemon

- DELETE method

- localhost:4000/api/pokemon

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: null, response: ""}

#### Read Pokemon List

- GET method

- localhost:4000/api/pokemon

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: null, response: ""}

#### Create Battle

- POST method

- localhost:4000/api/battle

- Authentication not required

- Body must be:
  {}

- Recieve:
  {success: true, error: null, response: ""}

#### Read Battle List

- GET method

- localhost:4000/api/battle

- Authentication not required

- Body not required

- Recieve:
  {success: true, error: null, response: ""}

## Versions:

- v0.4.0 | Created pokemon model.

- v0.3.1 | Created controllers files.

- v0.3.0 | Created routes from pokemons and battles.

- v0.2.0 | Created dotenv, database, constants and server files.

- v0.1.0 | First commit.
