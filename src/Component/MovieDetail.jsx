import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=def50bc7`) // Fetch details using ID
      .then((res) => res.json())
      .then((data) => {
        setMovie(data); // Set the movie state to the fetched data
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.Title} ({movie.Year})</h1>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '300px', height: 'auto' }} />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
    </div>
  );
};

export default MovieDetail;
