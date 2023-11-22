import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { title, date, image, genre, id } = props;
  const url_image = `https://image.tmdb.org/t/p/w300/${image}`;
  return (
    <MovieStyle>
      <img className={"movie__image"} src={url_image} alt="" />
      <Link to={`/movie/${id}`}>
        <h3 className="movie__title">{title}</h3>
      </Link>
      <p className="movie__genre">{genre}</p>
      <p className="movie__date">{date}</p>
    </MovieStyle>
  );
};

const MovieStyle = styled.div`
  margin-bottom: 5rem;
  position: relative;

  .movie__genre {
    color: #64748b;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .movie__image {
    border-radius: 25px;
    width: 250px;
    height: auto;
  }

  .movie__title {
    color: #b81d24;
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
  }

  .movie__date {
    color: #64748b;
    font-size: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;

    .movie__image {
      border-radius: 25px;
      width: 360px;
      height: 560px;
      margin-bottom: 0.5rem;
    }
  }
`;

export default Movie;
