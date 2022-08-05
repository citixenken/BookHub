export const FETCH_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": ${process.env.HAPI_KEY}
    "X-RapidAPI-Host": ${process.env.HAPI_HOST}
  },
};

export const HAPI_BOOKS_API_URL = "https://hapi-books.p.rapidapi.com";

//UNUSED
//======
export const GET_BOOK_BY_NAME =
  "https://hapi-books.p.rapidapi.com/search/the+walking+dead";

export const GET_BOOK_BY_ID = "https://hapi-books.p.rapidapi.com/book/56597885";
export const GET_BOOK_BY_POPULAR_WEEKLY =
  "https://hapi-books.p.rapidapi.com/week/horror";
export const GET_BOOK_BY_POPULAR_MONTHLY =
  "https://hapi-books.p.rapidapi.com/month/2022/3";
export const GET_BOOK_BY_GENRE_ANNUAL =
  "https://hapi-books.p.rapidapi.com/nominees/fiction/2020";
