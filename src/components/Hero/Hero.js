import { useEffect, useState } from "react";
import Button from "../Navbar/ui/Button";
import styled from "styled-components";

const Hero = () => {
  const [movie, setMovie] = useState({});

  async function getDataApi() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  useEffect(function () {
    getDataApi();
  }, []);

  console.log(movie);

  return (
    <Container>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.Title}</h2>
          <h3 className="hero__genre">Genre: {movie.Genre}</h3>
          <p className="hero__description">{movie.Plot}</p>
          <Button variant="secondary">Watch</Button>
          <Button variant="primary">Trailer</Button>
        </div>
        <div className="hero__right">
          <img className="hero__image" src={movie.Poster} alt="placeholder" />
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  /* Small Screen */
  margin: 1rem;

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: #b81d24;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .hero__genre {
    color: #f5f5f1;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
    padding-right: 24px;
  }

  .hero__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #b81d24;
    color: #f5f5f1;
  }

  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    .hero {
      margin: 1rem 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__right {
      flex-basis: 60%;
      margin-left: 1rem;
      padding-top: 7rem;
      padding-bottom: 7rem;
    }

    .hero__image {
      width: 100%;
      height: auto;
    }
  }
`;

export default Hero;
