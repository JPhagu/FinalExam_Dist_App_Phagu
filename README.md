# FinalExam_Dist_App_Phagu
- access the api:
     ```
     http://localhost:3000
    ```
- access the git repo:
     ```
     https://github.com/JPhagu/FinalExam_Dist_App_Phagu/invitations
    ```
## Resources

- Each movie has the following attributes:
  - `id`: Unique identifier for the movie.
  - `title`: Title of the movie.
  - `genre`: Genre of the movie.
  - `releaseYear`: Release year of the movie.

## API Endpoints
#### /api is not necessary just append each endpoint after the port
- `POST /movies` - Create a new movie
- `GET /movies` - Retrieve all movies
- `GET /movies/:id` - Retrieve a movie by ID
- `PUT /movies/:id` - Update a movie
- `DELETE /movies/:id` - Delete a movie

## Setup and running
### Initial setup steps:
    cd myApi

    npm init -y

    npm install express body-parser fs

    
    
### Then run using this command:
 
    node index.js

