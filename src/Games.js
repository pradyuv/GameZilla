import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import gamesData from './games.json';

function Games() {
  const location = useLocation();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const genre = searchParams.get('genre');
    const genres = genre ? [genre] : [];
    setSelectedGenres(genres);
  }, [location.search]);

  useEffect(() => {
    let filteredGames = gamesData.games;

    if (selectedGenres.length > 0) {
      filteredGames = filteredGames.filter((game) => {
        const gameGenres = game.genre.split(',').map((genre) => genre.trim());
        return selectedGenres.some((selectedGenre) => gameGenres.includes(selectedGenre));
      });
    }

    setFilteredGames(filteredGames);
  }, [selectedGenres]);

  const genres = ['Action RPG', 'FPS', 'Open World', 'Zombie', 'Strategy'];

  return (
    <>
      <NavigationBar />
      <div className="bg-dark">
        <Container fluid className="vh-100 d-flex flex-column">
          <h2 className="text-white text-center mb-4 pt-3">Featured Games</h2>
          <Row>
            <Col md={3}>
              <h4 className="text-white">Genres:</h4>
              {genres.map((genre) => (
                <div key={genre} className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={genre}
                    checked={selectedGenres.includes(genre)}
                    onChange={() => setSelectedGenres((prevGenres) => {
                      if (prevGenres.includes(genre)) {
                        return prevGenres.filter((selectedGenre) => selectedGenre !== genre);
                      } else {
                        return [...prevGenres, genre];
                      }
                    })}
                  />
                  <label className="form-check-label text-white" htmlFor={genre}>
                    {genre}
                  </label>
                </div>
              ))}
            </Col>
            <Col md={9}>
              <Row>
                {filteredGames.map((game) => (
                  <Col md={4} key={game.name}>
                    <Link to="/thisgame" state={{ name: game.name, imagePath: game.imagePath }}>
                      <Card className="bg-dark text-white">
                        <Card.Img src={game.imagePath} alt={game.name} />
                        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                          <Card.Title>{game.name}</Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Games;
