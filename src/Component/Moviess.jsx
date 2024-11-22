import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './Moviess.css'
function Moviess() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchApi = () => {
      fetch('https://www.omdbapi.com/?s=batman&apikey=def50bc7') // Changed to use 's' for searching
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.Search) {
            setMovies(data.Search); // Set the movies state to the array of search results
          }
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
    };

    fetchApi();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div id='card'>
      <div id='container'>
        movies
        {movies.map((val) => {
          return (
            <div key={val.imdbID}>
              <ul>
                <li >
                <Link to={`/movie/${val.imdbID}`} style={{ textDecoration: 'none', color: 'black' }}>

                  <img
                    src={val.Poster}
                    alt={val.Title}
                    style={{ width: '150px', height: 'auto' }}
                  />
                  <h3>{val.Title} ({val.Year})</h3>
                   </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Moviess;

