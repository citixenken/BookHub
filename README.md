<p align="center"><img src="https://img.icons8.com/plasticine/344/apple-books.png" /></p>

<h1 align="center">BookHub</h1>

<p align="center"> A Repository of Your Favourite Books </p>

<hr/>

The application leverages the HAPI Books <a href="https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/">API</a> for external data fetching based on a variety of input query parameters; and a local database to add book titles to your Library collection, and so much more.

## API Usage and Endpoints

### `GET` Search Books by Name
Required parameter(s): `${book_name}`

Example URL: `https://hapi-books.p.rapidapi.com/search/the+walking+dead`


### `GET` the Top 15 most popular books in a Month of an Year
Provide the year and the month (between 1 and 12) and receive the 15 most popular books for that month.

Required parameter(s): `${month}` and `${year}`

Example URL: `https://hapi-books.p.rapidapi.com/month/2022/3`


### `GET` List of Nominated Books for a Genre in a Year
For a certain year and a genre, get the list of all nominated books to win an award.

Required parameter(s): `${genre}` and `${year}`

Example URL: `https://hapi-books.p.rapidapi.com/nominees/romance/2020`


### `GET` Weekly Popular Books by Genre
Returns the most popular books from the last weeks given a genre.

Required parameter(s): `${genre}` 

Example URL: `https://hapi-books.p.rapidapi.com/week/horror`

## Set up locally
Fork and clone this repo.

Frontend: Run `npm install && npm start` and open [http://localhost:3000](http://localhost:3000).

Backend: Run `npm i json-server` in project root folder to set up local `db.json` to get started. Refer to backend repo for correct JSON file structure. Once setup, run `json-server --watch db.json` 

## Local DB Features
 
1. `POST`: Add new book titles to book collection and DB</li>
2. `DELETE`: Remove book titles from book collection and DB</li>
3. Search book titles from book collection</li>
 
## Deployment
### Frontend - via Netflify
This is the [main](https://github.com/citixenken/BookHub) repository that handles all frontend operations.

Frontend Netlify live [link](https://bookhub-app.netlify.app/)

### Backend - via Heroku
Used [json-server template](https://github.com/learn-co-curriculum/json-server-template) to generate backend code. Facilitates faster deployment of backend JSON data to Heroku.

Here's the link to the [backend repository](https://github.com/citixenken/json-server-bookhub-backend) for this project.

Backend Heroku live [link](https://bookhub-app.herokuapp.com/)

## Demo
![BookHub_Demo_Gif](public/bookhub-app.gif)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## Licence
This project is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT</a> License



