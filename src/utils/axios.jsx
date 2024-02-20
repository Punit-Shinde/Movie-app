import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGNmZTI4ZGE4NmQ1NDQ1YWM0NGJmNjAxMDcwNGFjZCIsInN1YiI6IjY1Y2IzZDFjMDA1MDhhMDE3YjQyNjZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rwdk4nOKRSPC7laypvuZ1SlRU8A9KaHGDIZ5p36Qw9A",
  },
});


export default instance;