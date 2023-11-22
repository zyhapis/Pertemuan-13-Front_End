import React, { useEffect, useState } from 'react';
import GetDetailMovie from '../../utils/networks/GetDetailMovie';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
margin-top: 1.5rem;
margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  color: #fff;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  background-image: ${(props) =>
    props.backdrop &&
    `url(https://image.tmdb.org/t/p/original/${props.backdrop})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    z-index: 1;
  }
`;

const MoviePoster = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 8px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.5), 0px 6px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const PosterShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
`;

const MovieTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 10px;
  z-index: 2;
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  z-index: 2;
`;

const MovieInfoItem = styled.div`
  margin: 5px;
  font-size: 17px;
  color: white;
`;

const Synopsis = styled.div`
  text-align: center;
  max-width: 1100px;
  margin-bottom: 20px;
  font-size: 20px;
  z-index: 2;
`;

const BackButton = styled(Link)`
  background-color: #b81d24;
  color: #fff;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  z-index: 2;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: darkred;
    transform: scale(1.05);
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getDetail = async (id) => {
    const data = await GetDetailMovie(id);
    setMovie(data);
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <DetailContainer backdrop={movie.backdrop_path}>
      {movie.poster_path && (
        <MoviePoster>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: '0',
              left: '0',
              borderRadius: '8px',
              objectFit: 'cover',
              zIndex: '2',
            }}
          />
          <PosterShadow />
        </MoviePoster>
      )}
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieInfo>
        <MovieInfoItem>
          <strong>Release Date:</strong> {movie.release_date}
        </MovieInfoItem>
        <MovieInfoItem>
          <strong>Rating:</strong> {movie.vote_average}
        </MovieInfoItem>
        <MovieInfoItem>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </MovieInfoItem>
        <MovieInfoItem>
          <strong>Genres:</strong>{' '}
          {movie.genres && movie.genres.map((genre) => genre.name).join(', ')}
        </MovieInfoItem>
      </MovieInfo>
      <Synopsis>{movie.overview}</Synopsis>
      <BackButton to="/">Back to Movies</BackButton>
    </DetailContainer>
  );
};

export default Detail;
